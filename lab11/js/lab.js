/* Author: Noah Dane, Syd Young 

lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

 Requirements: jQuery must be loaded for this script to work.

Date: Thur, May 16, 2024

*/

function sortString(inputString) {
    return inputString.split('').sort().join('');
}



$("#submit").click(function () {
    const userName = $("#user-name").val();

    userNameSorted = sortString(userName);

    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

$("#submit").click(function () {
    const userName = $("#user-name").val();

    userNameSorted = sortString(userName);

    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
