//jslife.js



$(document).ready(function () {

	initGrid(w);

	var test=[
		[1, 0, 0],
		[0, 1, 0],
		[0, 1, 0],
	];

	var state = initState();

	setInterval(function(){
		plotState(state);
		state = nextState(state);

	}, 100);


});


function initGrid(gridsize)
{
	var x;
	var y;
	for (y=0; y<gridsize; y++) {
		var row='<div class="row">';

		for (x=0; x<gridsize; x++) {
			var divname='cell'+x+'_'+y;
			var cell='<div class="cell" id="'+divname+'">&nbsp;</div>';
			row=row+cell;

		}
		var row=row+'</div>';

		$('#grid').append(row);
	}


}


function plotState(grid)
{
	var x;
	var y;
	for (y=0; y<grid.length; y++) {

		for (x=0; x<grid[y].length; x++) {
			var divid='#cell'+x+'_'+y;
			if (grid[y][x]) {
				$(divid).addClass('alive');
				$(divid).removeClass('dead');
			} else {
				$(divid).removeClass('alive');
				$(divid).addClass('dead');
			}

		}
	}
}