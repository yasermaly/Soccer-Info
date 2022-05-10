// GLOBAL VARIABLES

const apiToken = "MMYVfqsnHtw5rzbBPzmwyiRq6wIAV0bCuV99DTlXwKNJd78W3ptKvQ8n88hU"
const $name = $('#name')
const $dateOfBirth = $('#birth-date')
const $club = $('#club')
const $league = $('league')
const $goals = $('#goals')

const $form = $('form')
const $input = $(`input[type="text"]`)
const userInput = $input.val()

// SOCCER INFO ATTEMPTED AJAX REQUEST

const settings = {
    "url": `"https://soccer.sportmonks.com/api/v2.0/players/search/${userInput}?api_token=${apiToken}&include="`,
    "method": "GET",
    "timeout": 0,
  };


  $form.on('submit', handleGetData)

  function handleGetData(event){ 
  
      event.preventDefault()
      const userInput = $input.val()
      console.log(userInput)
    
    $.ajax(settings).then(function (data) {
      console.log(data);
      $name.text(data[0].display_name)
    });
  
  }


// SPORTMONKS SAMPLE AJAX REQEST

// var settings = {
//     "url": "https://soccer.sportmonks.com/api/v2.0/players/search/Zlatan+Ibrahimovic?api_token=MMYVfqsnHtw5rzbBPzmwyiRq6wIAV0bCuV99DTlXwKNJd78W3ptKvQ8n88hU&include=",
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


