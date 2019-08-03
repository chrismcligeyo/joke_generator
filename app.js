document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {

    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);

            let output = '';


            if(response.type === 'success'){

                response.value.forEach(function(joke) {//dont doresponse.forEach. Response is an object with type and value parameters. we dont want to loop thrugh both. we loop through the value array, thats why we use response.value.forEach
                    output += `<li>${joke.joke}</li>`; //joke.joke, first joke represents single response(joke), second is the joke parameter in api in response object
                });

                } else {
                    output += '<li>Something went wrong</li>';
                }
                document.querySelector('.jokes').innerHTML = output;
            }
        }



    xhr.send();




    e.preventDefault();
}