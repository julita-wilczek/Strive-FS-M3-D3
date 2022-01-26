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
        alert("Don't worry, be happy!")
        //Handle API errors gracefully, using alert components with a custom message inside.
      });
      }


window.onload = () => {
createImages()
changeEdit()
hideCard()
}
  



/*

*/