function navFunc() {
    document.querySelector('html').classList.toggle('open')
}
function () {
    // メニューの固定表示
    $('.fixed-menu').on('click', function () {
        alert('メニューがクリックされました');
    });
    // ボランティアの固定表示
    $('.fixed-volunteer').on('click', function () {
        alert('ボランティア詳細ページへ移動');
    });
};