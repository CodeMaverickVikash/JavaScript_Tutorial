// Ajax using Javascript
//  The XMLHttpRequest object is created by Javascript, is used to to exchange data with server.
// To send request to a server, we use two open() and send() method of XMLHttpRequest object
// open(method, url, async)
// send(): sends the request to hte server (used for GET)

// AJAX server response
// The readystate property holds the status of the XMLHttpRequest.
// The onreadystatechange property defunes a function to be executed when the readystate change
// The status property and the statusText property holds the status of the XMLHttpRequest object

// Ajax call using XMLHttpRequest
function XMLHttpRequestCall() {
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    // Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    // What to do on progress (optional)
    xhr.onprogress = function () {
        console.log('On progress');
    }
    xhr.onreadystatechange = function () {
        console.log('ready state is ', xhr.readyState);
    }
    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("Some error occured")
        }
    }
    xhr.send();
}

XMLHttpRequestCall();

// Ajax using jquery
// ajax runs on server, is not programming language
// The load method loads date from a server and puts the returned data into the selected Element.
// $(selector).load(URL, data, callback),

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