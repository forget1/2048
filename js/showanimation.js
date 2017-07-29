/*生成数字时动画效果*/
function showNumberWithAnimation(i, j, randNumber) {
	var numberCell	 = $("#number-cell-" + i + "-" + j);
	numberCell.css("background-color", getNumberBackgroundColor(randNumber));
	numberCell.css("color", getNumberColor(randNumber));
	numberCell.text(randNumber);
	numberCell.animate({
		width: cellSideLength,
		height:cellSideLength,
		top:getPosTop(i, j),
		left:getPosLeft(i, j)
	}, 50);
}

/*移动数字时动画效果*/
function showMoveAnimation( fromx , fromy , tox, toy ){
    var numberCell = $('#number-cell-' + fromx + '-' + fromy );
    numberCell.animate({
        top:getPosTop( tox , toy ),
        left:getPosLeft( tox , toy )
    },100);
}