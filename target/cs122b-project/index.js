/**
 * This example is following frontend and backend separation.
 *
 * Before this .js is loaded, the html skeleton is created.
 *
 * This .js performs two steps:
 *      1. Use jQuery to talk to backend API to get the json data.
 *      2. Populate the data to correct html elements.
 */


/**
 * Handles the data returned by the API, read the jsonObject and populate data into html elements
 * @param resultData jsonObject
 */
function handleStarResult(resultData) {
    console.log("handleStarResult: populating star table from resultData");

    // Populate the star table
    // Find the empty table body by id "star_table_body"
    let starTableBodyElement = jQuery("#star_table_body");

    // Iterate through resultData, no more than 10 entries
    for (let i = 0; i < Math.min(20, resultData.length); i++) {
        var resultStar = JSON.parse(resultData[i]["movie_stars"]);
        // Concatenate the html tags with resultData jsonObject
        let rowHTML = "";
        rowHTML += "<tr>";
        // rowHTML +="<th>" + resultData[i]["movie_title"] + "</th>";
        rowHTML +=
            "<th>" +
            // Add a link to single-movie.html with id passed with GET url parameter
            '<a href="single-movie.html?id=' + resultData[i]['movie_id'] + '">'
            + resultData[i]["movie_title"] +
            '</a>' +
            "</th>";
        rowHTML +="<td>" + resultData[i]["movie_year"] + "</td>";
        rowHTML +="<td>" + resultData[i]["movie_director"] + "</td>";
        rowHTML +="<td>" + resultData[i]["movie_rating"] + "</td>";
        rowHTML +="<td>" + resultData[i]["movie_genre"] + "</td>";
        // rowHTML +="<td>" + resultStar[0]["starname"] + "</td>";
        rowHTML +=
            "<th>" +
            // Add a link to single-movie.html with id passed with GET url parameter
            '<a href="single-star.html?id=' + resultStar[0]['starid'] + '">'
            + resultStar[0]["starname"] +
            '</a>' + ", " + '<a href="single-star.html?id=' + resultStar[1]['starid'] + '">'
            + resultStar[1]["starname"] +
            '</a>' + ", " + '<a href="single-star.html?id=' + resultStar[2]['starid'] + '">'
            + resultStar[2]["starname"] +
            "</th>";
        rowHTML += "</tr>";

        // Append the row created to the table body, which will refresh the page
        starTableBodyElement.append(rowHTML);
    }
}


/**
 * Once this .js is loaded, following scripts will be executed by the browser
 */

// Makes the HTTP GET request and registers on success callback function handleStarResult
jQuery.ajax({
    dataType: "json", // Setting return data type
    method: "GET", // Setting request method
    url: "api/stars", // Setting request url, which is mapped by StarsServlet in Stars.java
    success: (resultData) => handleStarResult(resultData) // Setting callback function to handle data returned successfully by the StarsServlet
});