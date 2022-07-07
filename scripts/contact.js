/* eslint-env jquery */

$(function() {
    // get relevant form elements
    
    var form = document.getElementById('email-form');
    var status = document.getElementById('email-form-status');
    
    // functions for handling form submission
    
    function success() {
        form.reset();
        
        status.classList.add("success");
        status.innerHTML = "Thanks for your submission!"
    }
    
    function error() {
        form.reset();
        
        status.classList.add("error");
        status.innerHTML = "Oops! Something went wrong!"
    }
    
    // handle form submission
    
    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
    
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}