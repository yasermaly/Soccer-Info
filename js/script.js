// GLOBAL VARIABLES

const apiToken = "MMYVfqsnHtw5rzbBPzmwyiRq6wIAV0bCuV99DTlXwKNJd78W3ptKvQ8n88hU"
const $main = $('main')
const $name = $('#name')
const $dateOfBirth = $('#birth-date')
const $nationality = $('#nationality')
const $height = $('#height')
const $weight = $('#weight')
const $img = $('img')
const $form = $('form')
const $input = $(`input[type="text"]`)

    // SOCCER INFO AJAX REQUEST TO RETRIEVE DATA FROM API

$form.on('submit', handleGetData)

function handleGetData(event){ 

    event.preventDefault()
    const userInput = $input.val()
    const userInput2 = userInput.replace(/ /g, '+')
    const settings = {
    "url": `https://soccer.sportmonks.com/api/v2.0/players/search/${userInput2}?api_token=${apiToken}&include=`,
    "method": "GET",
    "timeout": 0,
    };
    console.log(userInput)
    console.log(apiToken)

    $.ajax(settings).then(function (data) {
    // empty previous results    
    
    console.log(data.data);
    //display first & last name
    $name.text(`Name: ${data.data[0].display_name}`)
    //display date of birth
    $dateOfBirth.text(`Date of birth: ${data.data[0].birthdate}`)
    //display place of birth
    $placeOfBirth.text(`Place of birth: ${data.data[0].birthplace}`)
    //display nationality
    $nationality.text(`Nationality: ${data.data[0].nationality}`)
    //display height
    $height.text(`Height: ${data.data[0].height}`)
    //display weight
    $weight.text(`Weight: ${data.data[0].weight}`)
    //display image
    $img.attr('src',data.data[0].image_path)
    });
    //clear the input search field
    $input.val('')
}


// SPORTMONKS SAMPLE AJAX REQEST

// var settings = {
//     "url": "https://soccer.sportmonks.com/api/v2.0/players/search/Lionel+Messi?api_token=MMYVfqsnHtw5rzbBPzmwyiRq6wIAV0bCuV99DTlXwKNJd78W3ptKvQ8n88hU&include=",
//     "method": "GET",
//     "timeout": 0,
//   };
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });


  // // PAUL'S EXAMPLE AS REFERENCE

// $form.on('submit', handleGetData)

// // FUNCTIONS

// function handleGetData(event) {
    
    // event.preventDefault()
    // const userInput = $input.val()
    
//     $.ajax(url + userInput).then(function(data) {
//         console.log('Player data is ready')
//         console.log(data);
//         $name.text(data.Name)
//         $age.text(data.Age)
//         $club.text(data.Club)
//         $league.text(data.League)
//         $goals.text(data.Goals)
//         $assists.text(data.Assists)
//         $main.append(`<img src="${data.Poster}"/>`)
//     },  function (error) {
//         console.log('something is wrong')
//         console.log(error)
//     });

// }


