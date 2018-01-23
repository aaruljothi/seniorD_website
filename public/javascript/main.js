$(document).ready(function () {
    findShow();
});

// use url parameter to find what to show
function findShow(){
    curl = window.location.href;
    page = curl.split('=')[1];
    switch (page){
        case 'team':
            showTeam();
            break;
        case 'project':
            showProject();
            break;
        case 'sponsor':
            showSponsor();
            break;
        default: 
            showProject();
            break;
    }
}

function fadeShow(newPage){
    if ($('.current').length == 0){
        $(newPage).fadeIn(400, function(){
            $(newPage).addClass('current');
        });
        return;
    }
    $('.current').fadeOut(200, function(){
        $('.current').removeClass('current');
        $(newPage).fadeIn(300, function(){
            $(newPage).addClass('current');
        });
    });
}


function showSponsor(){
    $('.nav-item').removeClass('active');
    $('#SponsorLink').addClass('active');
    fadeShow('#sponsor')
    $('body').attr('style', "background-image: Url(''); background-color: #607D8B")

}

function showTeam(){
    $('.nav-item').removeClass('active');
    $('#TeamLink').addClass('active');
    fadeShow('#team')
    $('body').attr('style', "background-image: Url(''); background-color: #607D8B")
}

function showProject(){
    $('.nav-item').removeClass('active');
    $('#ProjectLink').addClass('active');
    fadeShow('#project')
    $('body').attr('style', "background-image: Url(''); background-color: #607D8B")
}
