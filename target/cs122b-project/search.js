let search_form = $("#search_form");

// function handleSubmitResult(){
//     console.log("sent data to movies server, changing windows to movie page");
//     window.location.replace("index.html");
//
// }

function submitSearchForm(formSubmitEvent){
    console.log(search_form.serialize()); ///serialize is going to have "title, director, year, stars"
    formSubmitEvent.preventDefault();
    window.location.replace("index.html?pageNum=1&sortBy=tite&order=ASC&browse=NO&" + search_form.serialize());
}


search_form.submit(submitSearchForm);