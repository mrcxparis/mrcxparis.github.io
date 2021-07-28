$('.myClass1').each(function() {
    
    var num = Math.floor(Math.random() * 10 + 1),
        img = $(this);
    
    img.attr('src', 'pictures/number'+num+'.jpg');
    img.attr('alt', 'Src: '+img.attr('src'));
    
});