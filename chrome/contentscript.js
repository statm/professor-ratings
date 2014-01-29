// $("td.instructor").each(function() {
    // var professorName = $(this).text();
    // if (professorName != ""
        // && rmpData.hasOwnProperty(professorName)) {
        // data = rmpData[professorName];
        // $(this).append(" <a href='http://www.ratemyprofessors.com/ShowRatings.jsp?tid=" + data.id + "' style='background-image: none;' target='_blank'>(" + data.a + ")</a>");
    // }
// });

var SERVER_URL = "http://statm.github.io/";

var localVersion = localStorage["data_ver"];
var remoteVersion = $.ajax({url: SERVER_URL + "version", async: false}).responseText;

console.log("local=" + ", remote=" + remoteVersion);

if (localVersion === undefined || parseInt(remoteVersion) > parseInt(localVersion)) {
    updateData();
}

function updateData() {
    $.ajax({
        url: "http://statm.github.io/professor-ratings/data.json",
        success: function(result) {
            localStorage["data"] = JSON.stringify(result);
            console.log(JSON.parse(localStorage["data"]));
        }
    });
}