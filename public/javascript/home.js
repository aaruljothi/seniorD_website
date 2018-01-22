$(document).ready(function () {
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    openHome();
});

// $('.carousel').carousel({fullWidth: true});


function hideAll(){
    $('.main').attr('style', 'display:none');
}


function openSponsor(){
    console.log('sponser');
    hideAll();
    $('li').removeClass('active');
    $('#SponsorLink').addClass('active');
    $('#sponsor').attr('style', 'display:block');
    $('body').attr('style', "background-image: Url(''); background-color: #FFFFFF")

}

function openTeam(){
    console.log('team');
    hideAll();
    $('li').removeClass('active');
    $('#TeamLink').addClass('active');
    $('#team').attr('style',  'display:block');
    $('body').attr('style', "background-image: Url(''); background-color: #444444")
}

function openProject(){
    console.log('project');
    hideAll();
    $('li').removeClass('active');
    $('#ProjectLink').addClass('active');
    $('#project').attr('style', 'display:block');
    $('body').attr('style', "background-image: Url(''); background-color: #999999")
}

function openHome(){
    console.log('home');
    hideAll();
    $('li').removeClass('active');
    $('#home').attr('style', "display:block");
    $('body').attr('style', "background-image: Url('/images/mainbg.jpg')");
}
