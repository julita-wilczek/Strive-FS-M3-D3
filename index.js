/*fetch('https://api.pexels.com/v1/search?query=dogs', {
    headers: {Authorization: '563492ad6f917000010000015af99495349042c9b0c053689fae61fc'}
  })
.then(response => response.json())
.then(database => {
    console.log(database)

})
.catch(err => {
	console.error(err)
}); */

function firstButton(){
  fetch('https://api.pexels.com/v1/search?query=dogs', {
      headers: {Authorization: '563492ad6f917000010000015af99495349042c9b0c053689fae61fc'}
    })
  .then(response => response.json())
  .then(database => {
   let cardImages = document.querySelectorAll(".card svg")
      let images = document.getElementsByTagName("img")
      for(let i = 0 ; i < images.length; i++ ){
          images[i].src = database.photos[i].src.medium
          cardImages[i].style.display = "none"
          images[i].style.display = "inline-block"
      }
      let mins = document.querySelectorAll("small")

      for (let i = 0; i < mins.length; i++) {

        mins[i].innerText= database.photos[i].id}
  })
  .catch(err => {
    console.error(err)
  });
  }

function secondButton(){
  fetch('https://api.pexels.com/v1/search?query=cats', {
      headers: {Authorization: '563492ad6f917000010000015af99495349042c9b0c053689fae61fc'}
    })
  .then(response => response.json())
  .then(database => {
   let cardImages = document.querySelectorAll(".card svg")
      let images = document.getElementsByTagName("img")
      for(let i = 0 ; i < images.length; i++ ){
          images[i].src = database.photos[i].src.medium
          cardImages[i].style.display = "none"
          images[i].style.display = "inline-block"
      }

      let mins = document.querySelectorAll("small")

      for (let i = 0; i < mins.length; i++) {

        mins[i].innerText= database.photos[i].id}
  })
  .catch(err => {
    console.error(err)
  });
  }




    function createImages(){
  
        let cardImages = document.querySelectorAll(".card svg")
        cardImages.forEach(image => {
        let newImage = document.createElement("img")
        newImage.style.width="100%"
        newImage.style.height="225px"
        newImage.style.objectFit = "cover"
        image.before(newImage) 
        newImage.style.display = "none"
    
    })

    }



    function changeEdit(){

      let buttons = document.querySelectorAll("button:nth-of-type(2)")
      buttons.forEach (button => {
        button.innerHTML = "Hide"
      })

      console.log(buttons)
    }

    function hideCard() {

      let buttons = document.querySelectorAll("button:nth-of-type(2)")
      let cards = document.querySelectorAll(".card")
      for (let i = 0; i < cards.length; i++ ) {
        buttons[i].addEventListener("click", function() {
          cards[i].style.display = "none"
        })
      }
    }



    function searchInput(event){
      fetch(`https://api.pexels.com/v1/search?query=${event.target.value}`, {
          headers: {Authorization: '563492ad6f917000010000015af99495349042c9b0c053689fae61fc'}
        })
      .then(response => response.json())
      .then(database => {
       let cardImages = document.querySelectorAll(".card svg")
          let images = document.getElementsByTagName("img")
          for(let i = 0 ; i < images.length; i++ ){
              images[i].src = database.photos[i].src.medium
              cardImages[i].style.display = "none"
              images[i].style.display = "inline-block"
          }
          let mins = document.querySelectorAll("small")
    
          for (let i = 0; i < mins.length; i++) {
    
            mins[i].innerText= database.photos[i].id}
      })
      .catch(err => {
        console.error(err)
      });
      }



window.onload = () => {
createImages()
changeEdit()
hideCard()
}
  
// https://api.pexels.com/v1/search?query=your-query
// https://api.pexels.com/v1/search?query=your-secondary-query


/*
<div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
*/