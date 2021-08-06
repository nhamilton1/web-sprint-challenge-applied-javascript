import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  console.log(article.articles)

  const divCard = document.createElement('div')
  const divHeadline = document.createElement('div')
  const divAuthor = document.createElement('div')
  const divImgContainer = document.createElement('div')
  const divImg = document.createElement('img')
  const divSpan = document.createElement('span')


  divCard.appendChild(divHeadline)
  divCard.appendChild(divAuthor)
  divAuthor.appendChild(divImgContainer)
  divImgContainer.appendChild(divImg)
  divAuthor.appendChild(divSpan)


  divCard.classList.add('card')
  divHeadline.classList.add('headline')
  divAuthor.classList.add('author')
  divImgContainer.classList.add('img-container')
  


  divHeadline.textContent = `${article.articles.headline}`
  divImg.src = `${article.articles.authorPhoto}`
  divSpan.textContent = `By ${article.articles.authorName}` 


  // article.forEach(ele => {
  //   const divHeadline = document.createElement('div')
  //   divCard.appendChild(divHeadline)
  //   divCard.classList.add('card')
  //   divHeadline.classList.add('headline')
  //   divHeadline.textContent = ele.articles.headline
 
    

  //   console.log(ele)
  // });


  console.log(divCard)
  return divCard
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  // console.log(selector)

  const cardContainer = document.querySelector(selector) 
  axios.get('http://localhost:5000/api/articles')
  .then(res => {
    console.log(res)
    const cardSelect = Card(res.data)
    cardContainer.append(cardSelect)
  })
  .catch(err => {
    console.error(err)
  })


}

export { Card, cardAppender }
