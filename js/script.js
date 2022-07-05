$(function(){

    // ページトップへ戻る
    const $pagetop = $('.page-top');

    $(window).on('scroll', function(){
        if($(this).scrollTop() < 400) {
            $pagetop.fadeOut();
        } else {
            $pagetop.fadeIn();
        }
    });
    $pagetop.on('click', function() {
        $('body, html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    // ページ内スムーススクロール
    $('a[href^="#"]').on('click', function() {
        const href = $(this).attr('href');
        const target = $(href == '#' || href == '' ? 'html' : href);
        const position = target.offset().top;
        const speed = 500;
        $('body, html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });

});