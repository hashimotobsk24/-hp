$(function(){

    let hoge = $('#plan').val();
console.log(hoge);

// $('.total').text(hoge + "円");


});

$(function(){
    $('button').click(function(){
        let cash = $('#plan').val();

        $('.total').text(cash + "円");
    })

});