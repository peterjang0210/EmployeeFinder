$(function(){
    const getEmployees = function (event) {
        event.preventDefault();
        $.ajax({
            url: "/api/employees",
            method: "GET",
            contentType: "application/json"
        }).then(function(response){
            console.log(response);
            compare(response);
        })
    }

    const compare = function (response) {
        const userInputVals = [];
        const differences = [];
        for(let i = 1; i <= 10; i++){
            userInputVals.push($(`#surveyQ${i}`).val());
        }
        
        for(let j = 0; j < response.length; j++){
            let totalDifference = 0;
            for(let k = 0; k < response[j].scores.length; k++){
                totalDifference += Math.abs(response[j].scores[k] - userInputVals[k]
                );
            }
            differences.push(totalDifference);
        }
        
        let smallestDifference = differences[0];
        let indexOfSmallest = 0;
        for(let l = 1; l < differences.length; l++){
            if(differences[l] < smallestDifference){
                smallestDifference = differences[l];
                indexOfSmallest = l;
            }
        }
        renderEmployee(indexOfSmallest, response);
    }

    const renderEmployee = function (index, response){
        $(".modal-body").append(`</div><p>${response[index].name}</p>
        <img src=${response[index].photo}><div>`)
    }

    $("#submit").on('click', getEmployees);
})