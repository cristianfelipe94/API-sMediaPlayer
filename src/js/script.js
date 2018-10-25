
// Create the XMLHttpRequest.
const request = new XMLHttpRequest();

// Add event listener.
// Function will run as page Loads.
request.addEventListener('load', function (event) {

  // Get the Elements from the DOM.
  const list = document.getElementById('infoBlock');
  const imgList = document.getElementById('imgBlock');
  const bandtitle = document.getElementById('bandName');

  // Response from the Load event.
  const response = event.target.response;
  console.log(response);

  // Create the Element P to store information from the API.
  // To access the API artist name.
  // Add the Name to the Container on the DOM.
  const titleArtist = document.createElement('p');
  titleArtist.innerHTML = response.artist.name;
  bandtitle.appendChild(titleArtist);

  // Create the Element P to store information from the API.
  // To access the API bio information from the band.
  // Add the Bio info to the Container on the DOM.
  const listItem = document.createElement('p');
  listItem.innerHTML = response.artist.bio.content;
  list.appendChild(listItem);

  // Create the Element IMG to store information from the API.
  // To access the API images.
  // Add the Image to the Container on the DOM.
  const imgArtist = document.createElement('img');
  imgArtist.setAttribute('class', 'image');
  imgArtist.setAttribute('src', response.artist.image[5]['#text']);
  imgList.appendChild(imgArtist);

});

// Response the system is waiting.
request.responseType = 'json';

// Request GET from the API Key.
// API Key: ec6b87893ed99918950286ecdc97bf34.
request.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Sticky+Fingers&api_key=ec6b87893ed99918950286ecdc97bf34&format=json');

// Sent the Request.
request.send();
