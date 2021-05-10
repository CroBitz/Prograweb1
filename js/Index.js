$(document).ready(function(){
    $('.hover').hover(function(){
        $(this).addClass('flip');
    },function(){
        $(this).removeClass('flip');
    });
});

const btnswitch = document.querySelector('#switch');
btnswitch.addEventListener('click' , () => {
    document.body.classList.toggle('dark');
    btnswitch.classList.toggle('active');
})