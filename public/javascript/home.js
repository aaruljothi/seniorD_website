$(document).ready(function () {
$('.carousel').carousel();
// $('.carousel.carousel-slider').carousel({fullWidth: true});
});
// $('.carousel').carousel({fullWidth: true});


function hideAll(){
    $('.main').attr('style', 'display:none');
}


function openSponsor(){
    console.log('sponser');
    hideAll();
    $('#sponsor').attr('style', 'display:block');
    $('body').attr('style', "background-image: Url(''); background-color: #FFFFFF")

}

function openTeam(){
    console.log('team');
    hideAll();
    $('#team').attr('style',  'display:block');
    $('body').attr('style', "background-image: Url(''); background-color: #444444")
}

function openProject(){
    console.log('project');
    hideAll();
    $('#project').attr('style', 'display:block');
    $('body').attr('style', "background-image: Url(''); background-color: #999999")
}

function openHome(){
    console.log('home');
    hideAll();
    $('#home').attr('style', "display:block");
    $('body').attr('style', "background-image: Url('/images/mainbg.jpg')");
}
