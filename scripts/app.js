import {apiKey} from "./environment.JS";


navigator.geolocation.getCurrentPosition(success, errorFunc);
//if the user accepts it is succesful if not it is an error

//navigator returns the geolocation object and get current position returns the ccurrent position of th user

{
    cords:{
        latitude: 45.45454545;
        longitude: 45.45454545;
    }
}


function success(position){
    console.log(position);
    console.log(" our latitude is " + position.coords.latitude);
    console.log(" our longitude is " + position.coords.longitude);
    console.log("we know where you are");
}

function errorFunc(){
    console.log("we can't find your location");
}
function apiCall () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}

function apiCall () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}