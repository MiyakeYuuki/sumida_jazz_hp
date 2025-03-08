function place(no){
	$.ajax({
		url: "../sjapp/index.php/band/place/"+no,
		async: false,
		success: function(ret) {
			$("#pls"+no).append(ret).append('<p class="text-right"><a href="timetable.html#stageList"><span class="glyphicon glyphicon-chevron-up"></span> ステージ一覧に戻る</a></p>');
			$(".stageList ul").append('<li class="col-sm-6"><a href="timetable.html#pls'+no+'">' + $(ret).children("strong").text() + '</a></li>');
		}
	});
	
}

$(function(){
	var html;
	$("#page-timetable").append('<div class="stageList" id="stageList"><h2>ステージ一覧</h2><ul class="row"></ul></div>');
	for(var i=338;i<=340;i++) {
		html = $("<div>").attr("id", "pls"+i).addClass("stage");
		$("#page-timetable").append(html);
		place(i);
	}
});
