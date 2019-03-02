var refreshRating = function() {
	  $('.rating').raty({
	    starHalf: '<%= asset_path 'star-half.png' %>',
	    starOff: '<%= asset_path 'star-off.png' %>',
	    starOn: '<%= asset_path 'star-on.png' %>',
	    scoreName: 'comment[rating]'
	  });
    $('.rated').raty({
  	    starHalf: '<%= asset_path 'star-half.png' %>',
  	    starOff: '<%= asset_path 'star-off.png' %>',
  	    starOn: '<%= asset_path 'star-on.png' %>',
      readOnly: true,
      score: function() {
  	      return $(this).attr('data-score');
  	    }
  	  });
    };

    	$(document).on('turbolinks:load', function() {
    	    refreshRating();

    	    $('.img-zoom').elevateZoom({
    	      zoomWindowFadeIn: 500,
    	      zoomWindowFadeOut: 500,
    	      lensFadeIn: 500,
    	      lensFadeOut: 500
    	    });
      });
