
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

function getIssues() {
  // let repo = 'joyhuangg/javascript-fetch-lab-dumbo-web-080618'
  let repo = 'joyhuangg/javascript-fetch-lab'
  let url = `https://api.github.com/repos/${repo}/issues`
  fetch(url,{
    headers: {
      Authorization: `token ${getToken()}`
    },
    method: 'GET'
  })
  .then(res => res.json())
  .then(json=> showIssues(json))
}

function showIssues(json) {
  let issueDiv = document.querySelector('#issues')
  json.forEach(function(issue){
    let li = document.createElement('li');
    li.innerHTML = `<strong>${issue.title}</strong> - ${issue.body}`;
    issueDiv.appendChild(li);
  })

}



function createIssue() {
  let title = document.querySelector("#title").value;
  let text = document.querySelector("#body").value;
  let repo = 'joyhuangg/javascript-fetch-lab'
  // let repo = 'learn-co-curriculum/javascript-fetch-lab'
  // let url = `https://api.github.com/repos/${repo}-dumbo-web-080618/issues`
  let url = `https://api.github.com/repos/${repo}/issues`
  fetch (url, {
    // method: 'POST',
    method: /post/,
    headers: {
      Authorization: `token ${getToken()}`,
    },
    body: JSON.stringify({
      "title":title,
      "body":text
    }
    )
  }).then(res => getIssues())
}

function showResults(json) {
  // debugger
  let resultsDiv = document.querySelector('div#results')
  const p = document.createElement('p')
  p.innerHTML = json
  resultsDiv.appendChild(p)
  return json
}


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const url = `https://api.github.com/repos/${repo}/forks`
  fetch(url,{
      headers: {
        Authorization: `token ${getToken()}`
      },
      method: /post/
      // method: 'POST'
  })
  .then(res => res.json())
  .then(json => showResults(json))
  .then(json => showForkedRepo(json))
  //use fetch to fork it!
}

function showForkedRepo(json){
  let resultsDiv = document.querySelector('div#results')
  let a = document.createElement('a');
  let linkText = document.createTextNode(`${json.full_name}`);
  a.appendChild(linkText);
  a.href = `https://github.com/${json.full_name}-dumbo-web-080618`;

  resultsDiv.appendChild(a)
}
