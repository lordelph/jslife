
var w = 25, h = 25;


var gens = 10;

function alive(s, x, y) {
	var neighbours = 0;

	for (xn = x-1; xn <= x+1; xn++) {
		for (yn = y-1; yn <= y+1; yn++) {
			if (xn !== x || yn !== y) {
				if (xn >= 0 && xn < w && yn >= 0 && yn < h) {
					if (s[xn][yn]) {
						neighbours++;
					}
				}
			}
	 	}
	}

	if (s[x][y]) {
		// live cell lives if it has 2 or 3 neighbours
		return neighbours === 2 || neighbours === 3;
	} else {
		// dead cell lives if if has 3 neighbours
		return neighbours === 3;
	}
}


function nextState(s) {
	var nextState = [];

	for (x = 0; x < w; x++) {
		nextState[x] = [];
		for (y = 0; y < h; y++) {
			nextState[x][y] = alive(s, x, y);
		}
	}

	return nextState;
}

function initState() {
	var result = [];


	for (x = 0; x < w; x++) {
		result[x] = [];
		for (y = 0; y < h; y++) {
			result[x][y] = false;
		}
	}

	result[0][4]=true;
	result[1][5]=true;
	result[2][5]=true;
	result[2][4]=true;
	result[2][3]=true;



	return result;
}

function outputState(s) {
	for (x = 0; x < w; x++) {
		str = '';
		for (y = 0; y < h; y++) {
			str += s[x][y] ? '*' : ' ';
		}
		console.log(str);
	}
}

/*
var state = initState(init);

for (var i = 0; i < gens; i++) {
	outputState(state);
	state = nextState(state);
}
*/