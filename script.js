
	let searchBtn = document.querySelector('.navBar .drakBage .search');
	let body = document.querySelector('body');
	let drakIcons = document.querySelector('.navBar .drakBage .drak');
	let iconsNaveBag = document.querySelector('.iconsNaveBag');
	let muneNav = document.querySelector('.muneNav');
	
	
	
	iconsNaveBag.addEventListener('click',()=>{
		iconsNaveBag.classList.toggle('active')
		muneNav.classList.toggle('active')
	})
	
	// add js code search 
	searchBtn.addEventListener('click',()=>{
		searchBtn.classList.toggle('active')
	})
	// add js code color body  
	drakIcons.addEventListener('click',()=>{
		drakIcons.classList.toggle('active');
		body.classList.toggle('activeBody');
		
	})