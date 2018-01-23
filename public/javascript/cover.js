$(document).ready(function () {
    $('body').fadeIn(600);
});

function changePage(page){
    $('body').fadeOut(600, function(){
        location.href = '/pages?=' + page;
    });
}