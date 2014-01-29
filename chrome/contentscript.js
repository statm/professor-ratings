var SERVER_URL = "http://statm.github.io/professor-ratings/";

var rmpData = JSON.parse(localStorage["data"]);

$("td.instructor").each(function() {
    $(this).contents().filter(function(){
        return this.nodeType == 3 || (this.nodeType == 1 && this.nodeName == "A");
    }).each(function(){
        var professorName = $(this).text().replace(",", "");
        if (professorName != ""
            && rmpData.hasOwnProperty(professorName)) {
            console.log("hit");
            entry = rmpData[professorName];
            if (parseInt(entry.r) > 0) {
                $(this).after("<a href='http://www.ratemyprofessors.com/ShowRatings.jsp?tid=" + entry.id + "' style='background-image: none;' target='_blank' class='tooltip' title='" + entry.a + "'>(" + entry.a + ")</a>");
            }
        }
    });
});

$(".tooltip").tooltipster({
    position: 'left',
    theme: 'tooltipster-light',
    interactive: true
});

//

function checkVersion() {
    var localVersion = localStorage["version"];
    var remoteVersion = $.ajax({url: SERVER_URL + "version", async: false}).responseText;

    console.log("local=" + localVersion + ", remote=" + remoteVersion);

    if (localVersion === undefined || parseInt(remoteVersion) > parseInt(localVersion)) {
        console.log("update required");
        updateData();
    }
}

function updateData() {
    $.ajax({
        url: SERVER_URL + "data.json",
        async: false,
        success: function(result) {
            localStorage["data"] = JSON.stringify(result);
            localStorage["version"] = remoteVersion;
            console.log("update done");
        }
    });
}