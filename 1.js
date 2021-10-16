let grids = [];
let otherGrids = [];
let blocks = [];
let inps = [];
let gamesIsChosen = false;
let isIt = false;
let gridNumber = 12;

	for(let i = 8; i<=11; i++){
		otherGrids.push(document.getElementById('grid'+i));
	}

	for(let i = 5; i<=8; i++){
		blocks.push(document.getElementById('block'+i));
		inps.push(document.getElementById('inp'+(i-4)));


	}

	for(let i = 1; i<=7; i++){
		grids.push(document.getElementById('grid'+i));
	}
		for(let i = 1; i<=7; i++){
		grids[5].addEventListener('touchmove', function(event){

					let e = window.event;
					let positionX = e.touches[0].clientX;
					let positionY = e.touches[0].clientY;
				

					this.style.top = (positionY - 520) + 'px';
					this.style.left  = (positionX - 350) + 'px';
				

						if(positionX >= 600){
							grids[2].style.opacity = 1;
						}

						if(positionX <= 600){
							grids[2].style.opacity = 0.5;
						}

						if(positionY >= 500){
							grids[3].style.opacity = 1;
						}

						if(positionY <= 700){
							grids[3].style.opacity = 0.5;
						}
						
						if(positionY <= 400){
							grids[0].style.opacity = 1;
						}

						if(positionY >= 400){
							grids[0].style.opacity = 0.5;
						}

						
						if(positionX <= 300){
							grids[1].style.opacity = 1;
						}

						if(positionX >= 300){
							grids[1].style.opacity = 0.5;
						}

	
						if(positionY >= 900){
							this.style.opacity = 0.5;
				


							document.getElementById('messblock').style.opacity = 0;
							document.getElementById('gameblock').style.opacity = 0;
							document.getElementById('favesblock').style.opacity = 0;
							document.getElementById('memblock').style.opacity = 0;
					
						for(let i = 0; i<=5; i++){
		
							grids[i].style.opacity = 0;
							grids[i].style.height = '0px'
							grids[i].style.border = '0px';
		
							if(this == grids[3]){
									if(i != 3){
										grids[3].style.height = '0px'
										grids[3].style.opacity = 0;
										gamesIsChosen = true;
									}
								}
						}


								let time1 = setTimeout(function(){
									document.body.style.backgroundImage='url(1.jpg)';
								}, 100)
						
							for(let i = 0; i<4; i++){
			
								otherGrids[i].style.opacity = 1;
								otherGrids[i].style.height = '150px';
			
									otherGrids[i].addEventListener('click', function(){
			
										this.style.width = '850px';
										this.style.height = '420px';
										this.style.marginTop = '-500px';
			
									let newArr = otherGrids.filter((currentValue)=>{
			
										return currentValue != this;
			
									})
								
									for(let i = 0; i<3; i++){
										newArr[i].style.left = '180px';
										newArr[i].style.marginTop = 0;
										newArr[i].style.height = '150px';
										newArr[i].style.width = '150px';
									}
			
									if(this == otherGrids[0]){
										this.style.left = '60px';
										document.body.style.backgroundImage='url(http://pm1.narvii.com/6871/d73b784478ec5b542783fc293f0302f48b8be457r1-1280-1781v2_uhq.jpg)';
										otherGrids[0].style.backgroundImage = 'url(https://static.wixstatic.com/media/2d0812_c1cc1eddd8f74b3a8436a6ab4c2f3c6a~mv2.gif)'
									}
			
									if(this == otherGrids[1]){
										this.style.left = '-100px';
										document.body.style.backgroundImage='url(https://wallpaperaccess.com/full/3050897.jpg)';
										otherGrids[1].style.backgroundImage = 'url(https://64.media.tumblr.com/a75f5ed41dd93f9c346a1572ec76e590/76c8caf1bb7118bf-08/s540x810/9c87d88a031fd952d0b56a41e68928467846935f.gif)'
			
									}
			
									if(this == otherGrids[2]){
										this.style.left = '-230px';
										document.body.style.backgroundImage='url(https://s2.best-wallpaper.net/wallpaper/iphone/1607/God-of-War-Sony-PS4-game_iphone_1080x1920.jpg)';
										otherGrids[2].style.backgroundImage = 'url(https://c.tenor.com/Ud1uS13bUf4AAAAC/kratos-ps4.gif)'
										
			
									}
			
									if(this == otherGrids[3]){
										this.style.left = '-350px';
										document.body.style.backgroundImage='url(https://i.pinimg.com/originals/9b/f5/78/9bf5784cf756d048f68e89653409626f.png)'
										otherGrids[3].style.backgroundImage = 'url(https://thumbs.gfycat.com/HighImpassionedGraywolf-size_restricted.gif)'
										
									}
								})
							}
						

						}
				})	


		let time2 = setTimeout(function(){

				for(let i = 0; i<4; i++){
					grids[i].style.opacity = 0.5;
				}
					grids[0].style.top = '100px';
					grids[3].style.top = '0px';
					grids[1].style.left = '-80px';
					grids[2].style.left = '260px';
					grids[4].style.opacity = 0;

					grids[5].style.opacity = 0;
					grids[5].style.backgroundImage = 'url(https://www.freeiconspng.com/thumbs/circle-icon/blue-geometric-circle-icon-21.png)';
		
			}, 700)	


				let time1 = setTimeout(function(){
						grids[5].style.opacity = 1;
				}, 1500)




		
	
}

	grids[5].addEventListener('click', function(){
		grids[5].style.backgroundImage = 'url(newicon.png)';
		grids[5].style.transform = 'rotate(360deg)';
	})
	
	