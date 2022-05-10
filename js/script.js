// //VARIABLES
// const url = "https://example.p.rapidapi.com/?rapidapi-key=ac40a89d57msh539caae758e05fdp1376f5jsn7ecabd3512ad"

// const $name = $('#name')
// const $age = $('#age')
// const $club = $('#club')
// const $league = $('league')
// const $goals = $('#goals')
// const $assists = $('$assists')
// const $form = $('form')
// const $input = $(`input[type="text"]`)

// // EVENT LISTENER

// $form.on('submit', handleGetData)

// // FUNCTIONS

// function handleGetData(event) {
    
//     event.preventDefault()
//     const userInput = $input.val()
    
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

var settings = {
    "url": "https://soccer.sportmonks.com/api/v2.0/players/search/neymar",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });



