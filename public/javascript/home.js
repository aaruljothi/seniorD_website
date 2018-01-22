$(document).ready(function () {


});

function hideAll(){
    $('.main').attr('style', 'display:none');
}


function openSponsor(){
    console.log('sponser');
    hideAll();
    $('#sponsor').attr('style', 'display:block');
    $('body').attr('style', "background-image: Url('')")
}

function openTeam(){
    console.log('team');
    hideAll();
    $('#team').attr('style', 'display:block');
}

function openProject(){
    console.log('project');
    hideAll();
    $('#project').attr('style', 'display:block');
}

function openHome(){
    console.log('home');
    hideAll();
    $('#home').attr('style', 'display:block');
}