function makeTable(elem){ // 데이터를 테이블 형식으로
	var $table = $("<table border=1>"); 
	
	for(var i =0; i<1;i++){
		var $tr=$("<tr>");
		for(var j=0; j<elem.eq(0).children().length;j++){
			// (elem.eq(0).children()) -> EMPLOYEE_ID, LAST_NAME, EMAIL, PHONE_NUMBER, HIRE_DATE
			var $td=$("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));
			$tr.append($td);
		}
		$table.append($tr);
	}
	
	for(var i =0; i<elem.length;i++){
		var $tr=$("<tr>");
		for(var j=0; j<elem.eq(i).children().length;j++){
			// 각각의 text()를 가져옴.
			var $td=$("<td>").append(elem.eq(i).children().eq(j).text());
			$tr.append($td);
		}
		$table.append($tr);
	}
	
	return $table; // 만들어진 테이블 반환
}
