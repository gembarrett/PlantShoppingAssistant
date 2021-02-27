var btn = document.getElementById('search');
// when you click search button
btn.addEventListener('click', event => {
  // grab the value of the text field
  plant = document.getElementById('plant').value;
  getPlants(plant);
});

function getPlants(plant){
  api = 'https://trefle.io/api/v1/plants?token='+key+'&filter[common_name]='+plant;
  var req = new XMLHttpRequest();
  req.addEventListener('load', listener);
  req.open('GET', api);
  req.send();
}

function listener(){
  console.log(this);
}
