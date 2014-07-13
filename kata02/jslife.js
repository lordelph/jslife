(function( $ ) {

    $.fn.jslife = function( width, height ) {
        $(this).attr('lifew', width);
        $(this).attr('lifeh', height);

        var state=initGrid($(this));
        addGlider(state);

        var grid=$(this);

		setInterval(function(){
        	state=nextState(grid, state);

        },50);

    };

    function nextState(grid, current)
    {
    	console.log('next state');

    	var next=[];

    	var height=grid.attr('lifeh');
    	var width=grid.attr('lifew');
    	var x,y,dx,dy;

    	for (y=0; y<height; y++) {
    		next[y]=[];
    		for (x=0; x<width; x++) {
    			next[y][x]=current[y][x];
    			var neighbours=0;
    			for (dx=-1; dx<=1; dx++) {

	    			for (dy=-1; dy<=1; dy++) {
	    				var cx=x+dx;
	    				var cy=y+dy;

	    				if ((cx>=0) && (cy>=0) && (cy<current.length) && (cx<current[cy].length)) {
	    					neighbours=neighbours + current[cy][cx];
	    				}
	    			}
    			}

    			if (current[y][x]) {
    				//we included this cell in the count
    				neighbours--;
    				//console.log('live cell '+x+','+y+' has '+neighbours+' neighbours');
    				//live cell
    				if ((neighbours<2) || (neighbours>3)) {
    					next=dead(next, y,x);
    				}

    			} else {
    				if (neighbours) {
    					//console.log('dead cell '+x+','+y+' has '+neighbours+' neighbours');
    				}
    				//dead cell
    				if (neighbours==3) {
    					next=alive(next, y,x);
    				}
    			}
    		}
    	}

		return next;
    }


    function addGlider(state)
    {
    	console.log('creating glider');
    	state=alive(state, 1,3);
    	state=alive(state,2,3);
    	state=alive(state,3,3);
    	state=alive(state,3,2);
    	state=alive(state,2,1);
    }

    function alive(state,y,x)
    {
    	state[y][x]=1;

    	var id='#cell_'+x+'_'+y;
    	$(id).addClass('alive');
    	console.log('birth at '+x+','+y);

    	return state;
    }
    function dead(state,y,x)
    {
    	state[y][x]=0;
    	var id='#cell_'+x+'_'+y;
    	$(id).removeClass('alive');
    	console.log('death at '+x+','+y);

    	return state;
    }

    function initGrid(grid) {
    	var x;
    	var y;

		var height=grid.attr('lifeh');
    	var width=grid.attr('lifew');

    	var state=[];

    	for (y=0; y<height; y++) {
    		var row='<div class="liferow">';
    		state[y]=[];
			for (x=0; x<width; x++) {
				state[y][x]=0;
				var id='cell_'+x+'_'+y;
    			row=row+'<div id="'+id+'" class="lifecell"></div>';
    		}
    		row=row+'</div>';
    		grid.append(row);
    	}

    	return state;

    }

})( jQuery );


