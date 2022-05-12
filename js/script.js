// GLOBAL VARIABLES

const apiToken = "MMYVfqsnHtw5rzbBPzmwyiRq6wIAV0bCuV99DTlXwKNJd78W3ptKvQ8n88hU"
const $main = $('main')
const $name = $('#name')
const $dateOfBirth = $('#birth-date')
const $placeOfBirth = $('#birth-place')
const $nationality = $('#nationality')
const $height = $('#height')
const $weight = $('#weight')
const $img = $('img')
const $form = $('form')
const $input = $(`input[type="text"]`)

// SOCCER INFO AJAX REQUEST TO GET SEARCHED DATA FROM SPORTMONKS API AND DISPLAY IT

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

    $.ajax(settings).then(function (data) {
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