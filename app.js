'use strict';

function getBreed() {
    const userBreed = $('#breed').val();
    return userBreed;
}

function getDogImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(responseJson => 
            displayImage(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function displayImage(responseJson) {
    console.log(responseJson);
    if (responseJson.status === "error") {
        $('.results').empty().append(
            `<h3>Sorry, breed not found. Try again`
        );
    }
    else {
        $('.results').empty().append(
            `<h3>What a cute dog!</h3>
            <img src="${responseJson.message}" class="results-img">`
        );
    }
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const breed = getBreed();
        getDogImage(breed);
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});