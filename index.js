const results = document.querySelector('div#results')
      title = document.querySelector('#title'),
      text =  document.querySelector('#body'),
      issues = document.querySelector('div#issues'),
      token = 'token 5ad241f70914666536fb0c34ef23ebd6e9d252a8'
      
function getIssues() {
  title.value = ""
  text.value = ""
  fetch(`https://api.github.com/repos/Anubis523/javascript-fetch-lab/issues`,
  {
    headers: {
      Authorization: `${token}`
    }
  })
    .then(res => res.json())
    .then(res => showIssues(res))
}
function showIssues(json) {
  console.log(json['1'])
  //wanna know what is what?
  for(const key in json) {
    console.log("Key: "+key+" Value: "+json[key].__proto__)
  }
  const issueListing = document.createElement('ul')
  let listContents = ""
  for(const key in json) {
    //  INSTRUCTIONS:
    listContents += `<li>Title: ${json[key].title}\nBody: ${json[key].body}</li>`
  }

  issues.innerHTML = listContents
}

function createIssue() {

  // alert(`Title: ${typeof title}, Text Body: ${text}`)
  const postData = {
    title: title.value,
    body: text.value
  }
  //testing MVP
  // alert(`Title is: ${title.value}, Body contains: ${body.value}`)
  const issueRepo = 'https://api.github.com/repos/Anubis523/javascript-fetch-lab/issues'
  
  //use fetch to fork it!
  fetch(`${issueRepo}`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `${token}`
    }
  })
    .then(res => getIssues())
    // .then(json => showIssues(json))
}
// Display the JSON result in the results div by calling showResults
function showResults(json) {
    let link = `<a href="${json['html_url']}">${json['html_url']}</a>`
    //wanna know what is what?
    // for(const key in json) {
    //   console.log(key+" "+json[key])
    // }
  results.innerHTML = link
}

function forkRepo() {
  const forkRepo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  
  //use fetch to fork it!
  fetch(`${forkRepo}`, {
    method: 'post',
    headers: {
      Authorization: `${token}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json))
}

function getToken() {
  const token = 'token 5ad241f70914666536fb0c34ef23ebd6e9d252a8'
  // return `token ${token}`
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
