var toDo = [];

$('button').on('click', function(evt) {
    var input = $('input').val();
    toDo.unshift(input);
    // addItems();
    $('.list').append(`<li>${input}<button>X</button></li>`);
    console.log(input);
    console.log(toDo);
});


$('ul.list').on('click', 'button', function() {
    $(this).closest('li').fadeOut(1000,function() {
        $(this).remove();
    });
});
