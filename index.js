fetch('https://api.pexels.com/v1/search?query=dogs', {
    headers: {Authorization: '563492ad6f917000010000015af99495349042c9b0c053689fae61fc'}
  })
.then(response => response.json())
.then(database => {
    console.log(database)

})
.catch(err => {
	console.error(err)
});


  
// https://api.pexels.com/v1/search?query=your-query
// https://api.pexels.com/v1/search?query=your-secondary-query