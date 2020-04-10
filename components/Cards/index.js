// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.//

function cardCreator(data) {
// create a cardCreator function that will take in API data

// 1 createElement
  const card = document.createElement('div')
  headline = document.createElement('div')
  author = document.createElement('div')
  imgContainer = document.createElement('div')
  authorImg = document.createElement('img')
  authorName = document.createElement('span')
  // 2 classlist
  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')
  // 3 textCont and image src
  headline.textContent = data.headline
  authorImg.src = data.authorPhoto
  authorName.textContent = `By${data.authorName}`
  // 4 append
  card.append(headline)
  headline.append(author)
  author.append(imgContainer)
  imgContainer.append(authorImg)
  author.append(authorName)
  // 5 return
  return card
  }

axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(response => {
  console.log(response)
  
  const arrOfArrOfObjVals = Object.values(response.data.articles)
  console.log(arrOfArrOfObjVals)

  arrOfArrOfObjVals.map(innerArr => {
    innerArr.map(article => {
      document.querySelector('.cards-container').append(cardCreator(article))
    })
  })
})
.catch(error => {
  console.log('there was a problem returning the article data' + error)
})