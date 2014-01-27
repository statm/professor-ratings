$("td.instructor").each(function() {
    var professorName = $(this).text();
    if (professorName != ""
        && rmpData.hasOwnProperty(professorName)) {
        data = rmpData[professorName];
        $(this).append(" <a href='http://www.ratemyprofessors.com/ShowRatings.jsp?tid=" + data.id + "' style='background-image: none;' target='_blank'>(" + data.a + ")</a>");
    }
});
