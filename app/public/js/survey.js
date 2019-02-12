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
        const userInputVals = [];
        for(let i = 1; i <= 10; i++){
            userInputVals.push($(`#surveyQ${i}`).val());
            console.log($(`#surveyQ${i}`).val());
        }
    }

    $("#submit").on('click', getEmployees);
})