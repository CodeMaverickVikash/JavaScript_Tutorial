// Ajax is used for backend codeing 
onsole.log("Ajax tutorial in one video");


// let fetchBtn = document.getElementById('fetchBtn');
// fetchBtn.addEventListener('click', buttonClickHandler)

// function buttonClickHandler() {
//     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    // const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'vikash.txt', true);

        // USE THIS FOR POST REQUEST
        // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
        // xhr.getResponseHeader('Content-type', 'application/json');


    // What to do on progress (optional)
    // xhr.onprogress = function () {
    //     console.log('On progress');
    // }


        // xhr.onreadystatechange = function () {
        //     console.log('ready state is ', xhr.readyState);

        // }

    // What to do when response is ready
    // xhr.onload = function () {
    //     if (this.status === 200) {
    //         console.log(this.responseText)
    //     }

    //     else {
    //         console.log("Some error occured")
    //     }
    // }

        // send the request
//         params = `{"name":"test34sad545","salary":"123","age":"23"}`;
//     xhr.send(params);

//         console.log("We are done!");

// }

    // let popBtn = document.getElementById('popBtn');
    // popBtn.addEventListener('click', popHandler);

    // function popHandler() {
    //     console.log('You have clicked the pop handler');

    //     // Instantiate an xhr object
    //     const xhr = new XMLHttpRequest();

    //     // Open the object
    //     xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    //     // What to do when response is ready
    //     xhr.onload = function () {
    //         if(this.status === 200){
    //             let obj = JSON.parse(this.responseText);
    //             console.log(obj);

    //             let list = document.getElementById('list');
    //             str = "";
    //             for (key in obj)
    //             {
    //                 str += `<li>${obj[key].employee_name} </li>`;
    //             }
    //             list.innerHTML = str;
    //         }
    //         else{
    //             console.log("Some error occured")
    //         }
    //     }

    //     // send the request
    //     xhr.send();
    //     console.log("We are done fetching employees!");

// }

// Ajax using jquery
// ajax runs on server, is not programming language
// The load method loads date from a server and puts the returned data into the selected Element.

// $(selector).load(URL, data, callback),





// Ajax using jquery
// ajax runs on server, is not programming language
// The load method loads date from a server and puts the returned data into the selected Element.
// $(selector).load(URL, data, callback),

// $(document).ready(function(){
//     $('#btnclick').click(function(){
//         $('#loaddata').load('load.html');
//     });
// });

// Ajax using Javascript
//  The XMLHttpRequest object is created by Javascript, is used to to exchange data with server.
// To send request to a server, we use two open() and send() method of XMLHttpRequest object
// open(method, url, async)  
// send(): sends the request to hte server (used for GET)

// AJAX server response
// The readystate property holds the status of the XMLHttpRequest.
// The onreadystatechange property defunes a function to be executed when the readystate change
// The status property and the statusText property holds the status of the XMLHttpRequest object

// function myfunc(){
//     var req = new XMLHttpRequest();
//     req.open('GET', 'load.html', true);
//     req.send();

//     req.onreadystatechange = function(){
//         if(req.readyState == 4 && req.status == 200){
//             document.getElementById('loaddata').innerHTML = req.responseText;
//         }
//     }
// }


// How to use get and post method in jquery AJAX
// jQuery $.get() Method
// The $.get() method requests data from the server with an HTTP GET request.
// Syntax:
// $.get(URL,callback);

// jQuery $.post() Method
// The $.post() method requests data from the server using an HTTP POST request.
// Syntax:
// $.post(URL,data,callback);
// Here data is extra data

// Both send the request to server but get is fast compared to post but post is more secure
// compared to get. GET show everything in URL but not post

// Get method
    // $(document).ready(function(){
    //     $('#btnclick').click(function(){

    //         $.get('load.html', function(data, status){
    //             $('#loaddata').html(data);
    //             alert(status);
    //         })
    //     })
    // })

    // Post method
    // $(document).ready(function(){
    //     $('#btnclick').click(function(){

    //         $.post('load.php', { name: "vikash", subs: "subscribe" }, function(data, status){
    //             $('#loaddata').html(data);
    //             alert(status);
    //         });
    //     });
    // });