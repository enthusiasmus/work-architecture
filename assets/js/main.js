$(document).ready(function(){
	$('#slider').nivoSlider({
        effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
        animSpeed: 400, // Slide transition speed
        pauseTime: 4000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        /* MUST BE TRUE, SO WE CAN TRIGGER CLICK ON NEXTNAV */
        directionNav: true, // Next & Prev navigation 
        controlNav: false, // 1,2,3... navigation
        controlNavThumbs: false, // Use thumbnails for Control Nav
        pauseOnHover: false, // Stop animation while hovering
        manualAdvance: false, // Force manual transitions
        afterChange: function(){
        	$('.nivoSlider img').click(function(){
        		$('a.nivo-nextNav').click();
        	});
        },
        afterLoad: function(){
        	$('.nivoSlider img').click(function(){
        		$('a.nivo-nextNav').click();
        	});
        }
    });
});