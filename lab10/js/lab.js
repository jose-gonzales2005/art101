/* Author: Noah Dane, Syd Young 
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

Requirements: jQuery must be loaded for this script to work.

Created: Thursday, May 9, 2024 */
$(".minor-section").each(function(index) {
    $(this).append("<button id='" + $(this).attr('id') + "'> button buytton</button>")
})

$(".minor-section button").click(function(){
    $(this).parent().toggleClass("special");
    console.log("class changed")
})

// $("#challenge").append("<button id='stupid'>evil clown button</button>")

// $("#problems").append("<button id='dumb'>evil clown button</button>")

// $("#reflection").append("<button id='evil'>evil clown button</button>")




