
// Create the XMLHttpRequest.
const request = new XMLHttpRequest();

// Add event listener.
// Function will run as page Loads.
request.addEventListener('load', function (event) {
  // Get the Elements from the DOM.
  const btn = document.getElementById('btnSearch');
  const bioBlock = document.getElementById('infoContentBlock');
  const statsBlock = document.getElementById('infoStatsBlock');
  const similarArtistImgFirst = document.getElementById('imgBlockSimilarArtistFirst');
  const similarArtistImgTwo = document.getElementById('imgBlockSimilarArtistTwo');
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
  titleArtist.setAttribute('id', 'bandTitle');
  bandtitle.appendChild(titleArtist);

  // Create the Element P to store information from the API.
  // To access the API bio information from the band.
  // Add the Bio info to the Container on the DOM.
  const contentBio = document.createElement('p');
  contentBio.innerHTML = response.artist.bio.content;
  contentBio.setAttribute('id', 'bandContent');
  bioBlock.appendChild(contentBio);

  // Create the Element P to store information from the API.
  // To access the API bio information from the band.
  // Add the Bio info to the Container on the DOM.
  const contentStats = document.createElement('p');
  const listenerStats = response.artist.stats.listeners;
  const playCounterStats = response.artist.stats.playcount;
  contentStats.innerHTML = `Band listeners: ${listenerStats} Band PlayCount: ${playCounterStats}`;
  contentStats.setAttribute('id', 'bandStatsContent');
  statsBlock.appendChild(contentStats);

  // Create the Element IMG to store information from the API.
  // To access the API images.
  // Add the Image to the Container on the DOM.
  const imgArtist = document.createElement('img');
  const imgArtistName = document.createElement('p');
  imgArtist.setAttribute('class', 'image');
  imgArtistName.setAttribute('class', 'artistBlockName');
  imgList.setAttribute('class', 'imageContainer');
  imgArtist.setAttribute('src', response.artist.image[5]['#text']);
  imgArtistName.innerHTML = response.artist.name;
  imgList.appendChild(imgArtist);
  imgList.appendChild(imgArtistName);

  // Create the Element IMG to store information from the API.
  // To access the API images.
  // Add the Image to the Container on the DOM.
  const imgSimilarFirstArtist = document.createElement('img');
  const imgSimilarFirstArtistName = document.createElement('p');
  imgSimilarFirstArtist.setAttribute('class', 'image');
  imgSimilarFirstArtistName.setAttribute('class', 'artistBlockName');
  similarArtistImgFirst.setAttribute('class', 'imageContainer');
  imgSimilarFirstArtist.setAttribute('src', response.artist.similar.artist['0'].image[5]['#text']);
  imgSimilarFirstArtistName.innerHTML = response.artist.similar.artist['0'].name;
  similarArtistImgFirst.appendChild(imgSimilarFirstArtist);
  similarArtistImgFirst.appendChild(imgSimilarFirstArtistName);

  // Create the Element IMG to store information from the API.
  // To access the API images.
  // Add the Image to the Container on the DOM.
  const imgSimilarSecondArtist = document.createElement('img');
  const imgSimilarSecondArtistName = document.createElement('p');
  imgSimilarSecondArtist.setAttribute('class', 'image');
  imgSimilarSecondArtistName.setAttribute('class', 'artistBlockName');
  similarArtistImgTwo.setAttribute('class', 'imageContainer');
  imgSimilarSecondArtist.setAttribute('src', response.artist.similar.artist['1'].image[5]['#text']);
  imgSimilarSecondArtistName.innerHTML = response.artist.similar.artist['1'].name;
  similarArtistImgTwo.appendChild(imgSimilarSecondArtist);
  similarArtistImgTwo.appendChild(imgSimilarSecondArtistName);

  // Add the Function to the Btn.
  // Event will start Search Engine.
  btn.addEventListener('click', searchEngine);
  imgSimilarSecondArtistName.addEventListener('click', searchSimilarArtist);
  imgSimilarFirstArtistName.addEventListener('click', searchSimilarArtist);
});

// Response the system is waiting.
request.responseType = 'json';

let artist = 'sticky+fingers';

let searchUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=ec6b87893ed99918950286ecdc97bf34&format=json`;

// Request GET from the API Key.
// API Key: ec6b87893ed99918950286ecdc97bf34.
request.open('GET', searchUrl);
// Sent the Request.
request.send();

function searchEngine() {
  // Get the Input DOM elements.
  const bar = document.getElementById('inputSearch');
  const bioBlock = document.getElementById('infoContentBlock');
  const statsBlock = document.getElementById('infoStatsBlock');
  const imgList = document.getElementById('imgBlock');
  const similarArtistImgFirst = document.getElementById('imgBlockSimilarArtistFirst');
  const similarArtistImgTwo = document.getElementById('imgBlockSimilarArtistTwo');
  const bandtitle = document.getElementById('bandName');

  if (bar.value !== '') {
    artist = bar.value;
    bar.value = '';
    bioBlock.innerHTML = ('');
    statsBlock.innerHTML = ('');
    similarArtistImgFirst.innerHTML = ('');
    similarArtistImgTwo.innerHTML = ('');
    imgList.innerHTML = ('');
    bandtitle.innerHTML = ('');
    searchUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=ec6b87893ed99918950286ecdc97bf34&format=json`;
    // Request GET from the API Key.
    // API Key: ec6b87893ed99918950286ecdc97bf34.
    request.open('GET', searchUrl);
    // Sent the Request.
    request.send();
  }
}

function searchSimilarArtist(event) {
  // Get the Input DOM elements.
  const bar = document.getElementById('inputSearch');
  const bioBlock = document.getElementById('infoContentBlock');
  const statsBlock = document.getElementById('infoStatsBlock');
  const imgList = document.getElementById('imgBlock');
  const similarArtistImgFirst = document.getElementById('imgBlockSimilarArtistFirst');
  const similarArtistImgTwo = document.getElementById('imgBlockSimilarArtistTwo');
  const bandtitle = document.getElementById('bandName');
  artist = event.target.innerHTML;
  bar.value = '';
  bioBlock.innerHTML = ('');
  statsBlock.innerHTML = ('');
  similarArtistImgFirst.innerHTML = ('');
  similarArtistImgTwo.innerHTML = ('');
  imgList.innerHTML = ('');
  bandtitle.innerHTML = ('');
  searchUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=ec6b87893ed99918950286ecdc97bf34&format=json`;
  // Request GET from the API Key.
  // API Key: ec6b87893ed99918950286ecdc97bf34.
  request.open('GET', searchUrl);
  // Sent the Request.
  request.send();
}

const bar = document.getElementById('inputSearch');
bar.oninput = () => {
  // Create the XMLHttpRequest.
  const requestPredict = new XMLHttpRequest();
  requestPredict.addEventListener('load', function loadResponse(event) {
    // Response from the Load event.
    const responsePredict = event.target.response;
    console.log(responsePredict);
    const responseArrayPredict = [
      responsePredict.results.artistmatches.artist['0'].name,
      responsePredict.results.artistmatches.artist['1'].name,
      responsePredict.results.artistmatches.artist['2'].name,
      responsePredict.results.artistmatches.artist['3'].name,
    ];
    responseArrayPredict.forEach(function () {
      const responseElementClear = document.getElementsByClassName('responseStyleElement');
      for (const e of responseElementClear) {
        e.setAttribute('class', 'killed');
      }
      const responseWrapperClear = document.getElementsByClassName('responseStyleWrapper');
      for (const i of responseWrapperClear) {
        i.setAttribute('class', 'killed');
      }
    });
    responseArrayPredict.forEach(function (element) {
      const responseWrapperPredict = document.getElementById('wrapperSearchBar');
      const responseContainerPredict = document.createElement('div');
      const responseElementPredict = document.createElement('p');
      responseElementPredict.setAttribute('class', 'responseStyleElement');
      responseContainerPredict.setAttribute('class', 'responseStyleWrapper');
      responseElementPredict.innerHTML = element;
      responseContainerPredict.appendChild(responseElementPredict);
      responseWrapperPredict.appendChild(responseContainerPredict);
    });
  });
  const contentBar = bar.value;
  const searchPredict = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${contentBar}&limit=4&api_key=ec6b87893ed99918950286ecdc97bf34&format=json`;

  // Response the system is waiting.
  requestPredict.responseType = 'json';

  // Request GET from the API Key.
  // API Key: ec6b87893ed99918950286ecdc97bf34.
  requestPredict.open('GET', searchPredict);

  // Sent the Request.
  requestPredict.send();
};
