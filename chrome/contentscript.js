var SERVER_URL = "http://statm.github.io/professor-ratings/";

var localVersion = localStorage["version"];
var remoteVersion = $.ajax({url: SERVER_URL + "version", async: false}).responseText;

console.log("local=" + localVersion + ", remote=" + remoteVersion);

if (localVersion === undefined || parseInt(remoteVersion) > parseInt(localVersion)) {
    console.log("update required");
    updateData();
}

var rmpData = JSON.parse(localStorage["data"]);

$("td.instructor").each(function() {
    var professorName = $(this).text();
    if (professorName != ""
        && rmpData.hasOwnProperty(professorName)) {
        data = rmpData[professorName];
        $(this).append(" <a href='http://www.ratemyprofessors.com/ShowRatings.jsp?tid=" + data.id + "' style='background-image: none;' target='_blank'>(" + data.a + ")</a>");
    }
});

function updateData() {
    $.ajax({
        url: SERVER_URL + data.json",
        async: false,
        success: function(result) {
            localStorage["data"] = JSON.stringify(result);
            localStorage["version"] = remoteVersion;
            console.log("update done");
        }
    });
}