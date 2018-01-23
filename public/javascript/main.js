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

function hideAll(){
    $('.main').attr('style', 'display:none');
}


function showSponsor(){
    hideAll();
    $('.nav-item').removeClass('active');
    $('#SponsorLink').addClass('active');
    $('#sponsor').attr('style', 'display:block');
    $('body').attr('style', "background-image: Url(''); background-color: #FFFFFF")

}

function showTeam(){
    hideAll();
    $('.nav-item').removeClass('active');
    $('#TeamLink').addClass('active');
    $('#team').attr('style',  'display:block');
    $('body').attr('style', "background-image: Url(''); background-color: #444444")
}

function showProject(){
    hideAll();
    $('.nav-item').removeClass('active');
    $('#ProjectLink').addClass('active');
    $('#project').attr('style', 'display:block');
    $('body').attr('style', "background-image: Url(''); background-color: #999999")
}
