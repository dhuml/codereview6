let Media = [
			{
				type: "Vinyl",
				title: "Dylan",
				artist: "Bob Dylan",
				genre: "rock",
				publisher: "Columbia",
				image: 'img/dylan.jpg',
				minutes: 34,
				rating: 4
			},
			{
				type: "Movie",
				title: "City lights",
				artist: "Charlie Chaplin",
				genre: "romantic comedy",
				publisher: "United Artists",
				image: 'img/citylights_image.jpg',
				minutes: 87,
				rating: 5
			},
			{
				type: "Movie",
				title: "Lawrence of Arabia",
				artist: "T.E.Lawrence",
				genre: "historical drama",
				publisher: "Columbia Pictures",
				image: 'img/Lawrence_of_arabia.jpg',
				minutes: 222,
				rating: 3
			},
			{
				type: "Vinyl",
				title: "Diamond Life",
				artist: "Sade",
				genre: "smooth soul",
				publisher: "Epic",
				image: 'img/sade-diamond-life.jpg',
				minutes: 45,
				rating: 5
			},
			{
				type: "Book",
				title: "Woodwalkers",
				artist: "Katja Brandis",
				genre: "belletristik",
				publisher: "Bild",
				image: 'img/woodwalkers.jpg',
				pages: 280,
				rating: 3
			},
			{
				type: "Book",
				title: "Foundation",
				artist: "Isaac Asimov",
				genre: "science fiction",
				publisher: "Heyne",
				image: 'img/asimov.jpg',
				pages: 255 ,
				rating: 5
			},{
				type: "Book",
				title: "The Sandman",
				artist: "Neil Gaiman",
				genre: "fantasy",
				publisher: "Vertigo",
				image: 'img/Sandman.jpg',
				pages: 255 ,
				rating: 2
			},
			{
				type: "Book",
				title: "Modesty Blaise",
				artist: "Peter O'Donnell",
				genre: "mystery",
				publisher: "Titan Books",
				image: 'img/modesty1.jpg',
				pages: 255 ,
				rating: 5
			}
		]

		// looping over objects to show them in index.html

		for (let i = 0; i < Media.length; i++) {
				
			// get bootstrap row by id

			let row = document.getElementById('rw');
			row.innerHTML +=

			// create structure for the Media elements and fill in informations
				`
				<div class="col-12 col-md-6 col-lg-4 columns" id="${Media[i].title.replace(/\s+|#/g, '')}">
					<div class=" row">
						<div class="col-6 col-md-6"  >
							<img class="img-thumbnail" src="${Media[i].image}">
						</div>
						<div class="col-6 col-md-6">
							<h3>${Media[i].title}</h3>
							<p>by ${Media[i].artist}</p>
							<p>published at ${Media[i].publisher}</p>

							<div class="rating"></div>
						</div>
					</div>
				</div>	`;

			// print stars for rating

			for (let j = 0; j < Media[i].rating; j++) {
					console.log('hello')				
					let mediaDiv = document.getElementById(`${Media[i].title.replace(/\s+|#/g, '')}`).querySelector(".rating").innerHTML += 
					`
						<span class="fa fa-star"></span>
					
					`
						}
					
							
			for (let k = 0; k < (5 - Media[i].rating); k++) {
							
					let mediaDiv = document.getElementById(`${Media[i].title.replace(/\s+|#/g, '')}`).querySelector(".rating").innerHTML += 
							`<span class="fa fa-star-o"></span>`;
						}	
		
			// adding items to carousel

			let carousel = document.getElementById("carousel");

			carousel.innerHTML += `
				<div class="carousel-item">
					<div class="d-flex justify-content-center" id="carousel-image">
						<img src="${Media[i].image}" alt="${i}slide" style="max-height: 400px; width:auto;">
					</div>
				</div>`




			}	
		
		

		
		