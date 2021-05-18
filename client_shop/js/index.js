

$('.list>p').click(change)
$('.more').click(change)

function change(){
    if($(this).next().css('display')==='block'){
        $(this).find('span').text('+')
        $(this).next().toggle()
     
    }else{
        $(this).find('span').text('-')
        $('.list>p').next().hide();
        $(this).next().toggle()
       

    }  

}
