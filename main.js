$('header button').click(function() {
    $('form').slideDown();
})

$('#cancel-button').click(function() {
    $('form').slideUp();
    })

$('form').on('submit', function(e) {
    e.preventDefault();
    const newImgAdress = $('#new-img-adress').val();
    const newItem = $('<li style="display: none"></li>');
    $(`<img src="${newImgAdress}" />`).appendTo(newItem);
    $(`<div class="overlay-img-link"> 
    <a href='${newImgAdress}' target="_blank" title="Ver imagem em tamanho original">
    Ver imagem em tamanho original 
            </a> 
        </div>
    `).appendTo(newItem);
    $(newItem).appendTo('ul');
    $(newItem).fadeIn(1000);
    $('#new-img-adress').val('')
})