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

function goCover(){
    $('body').fadeOut(400, function(){
        location.href = '/';
    });
}

function fadeShow(newPage){
    if ($('.current').length == 0){
        $('.navbar').fadeIn(600);
        $(newPage).fadeIn(600, function(){
            $(newPage).addClass('current');
        });
        return;
    }
    $('.current').fadeOut(400, function(){
        $('.current').removeClass('current');
        $(newPage).fadeIn(600, function(){
            $(newPage).addClass('current');
        });
    });
}


function showSponsor(){
    $('.nav-item').removeClass('active');
    $('#SponsorLink').addClass('active');
    fadeShow('#sponsor')

}

function showTeam(){
    $('.nav-item').removeClass('active');
    $('#TeamLink').addClass('active');
    fadeShow('#team')
}

function showProject(){
    $('.nav-item').removeClass('active');
    $('#ProjectLink').addClass('active');
    fadeShow('#project')
}
