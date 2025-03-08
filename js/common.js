$(function() {
    var pageTop = $('.pagetop');
    pageTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500, 'swing');
        return false;
    });

    // slidebar
    $.slidebars({
        disableOver: 640,
        scrollLock: true
    });

    $(".modal").each(function() {
        $(this).appendTo("body");
    });

    $('[data-toggle="modal"]').click(function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        var name = $(this).children('img').attr('alt');
        if (url.indexOf('#') == 0) {
            $(url).modal('open');
        } else {
            $.get(url, function(data) {
                $("#modalBase").html(data);
            }).success(function() { $("#modalBase").modal(); });
        }
    });
});

