// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM under the div.topics element.//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// 1 create function that will use the API data
function tabCreator(data) {
  const tab = document.createElement('div')
  tab.classList.add('tab')
  tab.textContent = data
  return tab
}
// 2 .get...to URL
axios.get('https://lambda-times-backend.herokuapp.com/topics')
// 3 .then...response needs to map through data.topics->target->append using new tabCreator
.then(response => {
  console.log(response)
  response.data.topics.map(topic => {
    document.querySelector('.topics').append(tabCreator(topic))
  })
})
// 4 .catch...error console.logs 'message' + error
.catch(error => {
  console.log('there was a problem returning the tab data' + error)
})
