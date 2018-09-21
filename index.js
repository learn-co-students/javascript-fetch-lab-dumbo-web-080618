let issues = document.getElementById('issues')
let res = document.getElementById('results')

//
//
function getIssues() {
  const repo = 'https://api.github.com/repos/aebenw/javascript-fetch-lab/issues'

  fetch(repo, {
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json()).then(json =>   showIssues(json));
}
//
function showIssues(json) {
  let it = json;
  let ulIs;
  if (!ulIs) {
    const ulIs = document.createElement('ul')
  }
  for (i in it) {
	console.log(it[i]['title'])
  let liIs = document.createElement('li')
  liIs.innerHTML = it[i]['title'];
  // liIs.innerHTML = `<a 'href= `${it[i]['html_url']}`'> + it[i]['title'] + "</a>`;
  liIs.innerHTML = "<a 'href= `${it[i]['html_url']}`'>" + it[i]['title'] + "</a>";
  issues.appendChild(liIs)
  }
}
//
function createIssue() {
  let isTitle = document.getElementById('title').value;
  let isText = document.getElementById('body').value

  let postData = {
    title: `${isTitle}`,
    body: `${isText}`
  }

    const repo = 'https://api.github.com/repos/aebenw/javascript-fetch-lab/issues'

   fetch(repo, {
    method: 'POST',
    body: JSON.stringify(postData),

    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => getIssues());

}
//
function showResults(json) {
  let link = json['html_url'];
  let name = json['name'];
  let ancs = document.createElement("a");

  ancs.innerHTML = `${name}`
  ancs.setAttribute('href', `${link}`)
  res.appendChild(ancs)

}


function forkRepo() {

  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'

 fetch(repo, {

  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json()).then(json => showResults(json));
  //use fetch to fork it!
}

function getToken() {

  return toke
 // return ''

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
}
