// ページ読み込み後の処理
document.addEventListener('DOMContentLoaded', function () {
    // Menuボタン(開く)とCloseボタン(閉じる)の要素を取得
    var openBtn = document.querySelector('.js-menu-open');
    var overlay = document.querySelector('.js-menu-overlay');
    var closeBtn = document.querySelector('.js-menu-close');

    // メニューを開く処理
    openBtn.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.classList.add('is-active');
    });

    // メニューを閉じる処理
    closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.classList.remove('is-active');
    });
});

$(document).ready(function () {
    $('#festivalCarousel').carousel({
        interval: 3000 // 3秒ごとに切り替え
    });
});