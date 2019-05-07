// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .

scroll_bottom = () => {
    if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight)
    }
}

clear_form = () => {
    message = document.getElementById('message_body');
    message.value = '';
}

$(document).on('turbolinks:load', function () {
    $('.ui.dropdown')
        .dropdown();

    scroll_bottom()
    clear_form()
});

$(document).on('turbolinks:load', function () {

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('containera');



    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");

    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");

    });
});