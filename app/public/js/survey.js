$(function(){
    const getEmployees = function (event) {
        event.preventDefault();
        $.ajax({
            url: "/api/employees",
            method: "GET",
            contentType: "application/json"
        }).then(function(response){
            compare(response);
        })
    }

    const compare = function (response) {
        console.log(response);
    }

    $("#submit").on('click', getEmployees);
})