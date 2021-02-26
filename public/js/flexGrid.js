
	// to get screen width and position product cards
	async function myGrid(){
		let cards = document.getElementsByClassName('card');
        let width = 210;
		var header = 90
		if(screen.width>1800){
			var screen_width = 1800;
		}
		else{
			var screen_width = screen.width;
		}
        if(screen_width<420){
            width=Math.floor(screen_width/2);
			header = 70
        }
		let columns = Math.floor(screen_width/width);
        let space = (screen_width - columns*width)/2
        if(columns<=3){
            width = Math.floor(screen_width/columns)
            space = 0;
        }
        // console.log(width, space, columns, screen_width)
		for(let i=0; i<cards.length; i++){
            cards[i].style.width = `${width-5}`
			let col = i%columns;
			let row = Math.floor(i/columns);
			let x = (col)*(-width);
			let y = 0;
			while(row>0){
				var n;
				if(row == 1){
					n = col;
				}
				else if (row == 2){
					n = columns + col;	
				}
				else{
					n = ((row-1)*columns) + col;
				}

				y += cards[n].clientHeight;
				row--;
			}
			cards[i].style.transform = `translate(${x - space}px, ${y + header}px)`;
		}
}