// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-44819464-1', 'chris-labs.de');
ga('send', 'pageview');

$(document).ready(function() {
	// FancyBox
	$('.fancybox').fancybox();

	// Disqus
	if ($('#disqus_thread').length > 0) { 
		/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
		var disqus_shortname = 'chrislabs'; // required: replace example with your forum shortname
		/* * * DON'T EDIT BELOW THIS LINE * * */
		(function() {
			var dsq = document.createElement('script');
			dsq.type = 'text/javascript';
			dsq.async = true;
			dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		})();
	}

	// FancyGif
	$('div.fancygif').each(function(index, box) {
		var imgTag = $(box).find('img')[0];
		var container = $($(box).find('.fancygif-container'));

		imgTag.onload = function() {
			container.css('width', $(imgTag).width());
			if(imgTag !== undefined && /.*\.gif/.test(imgTag.src)) {
				var superGif = new SuperGif({ gif: imgTag });
				superGif.load();

				// Get buttons if controls exist
				if($(box).find('.fancygif-controls').length > 0) {
					// Restart
					$($(box).find('.fancygif-restart')).on('click', function() {
						superGif.move_to(0);
					});
					// Forward
					$($(box).find('.fancygif-forward')).css('color','#999999');
					// Back
					$($(box).find('.fancygif-back')).css('color','#999999');
					
					// Play/Pause
					$($(box).find('.fancygif-playpause')).on('click', function(event) {
						var button = $(event.currentTarget);
						// Play was pressed -> start GIF disable forward/backward
						if(button.hasClass('glyphicon-play')) {
							button.removeClass('glyphicon-play');
							button.addClass('glyphicon-pause');
							// Forward
							$($(box).find('.fancygif-forward')).css('color','#999999').off('click');
							// Back
							$($(box).find('.fancygif-back')).css('color','#999999').off('click');
							superGif.play();
						}
						
						// Pause was pressed -> stop GIF make forward/backward active
						else {
							button.addClass('glyphicon-play');
							button.removeClass('glyphicon-pause');
							superGif.pause();
							// Forward
							$($(box).find('.fancygif-forward')).css('color','#333333').on('click', function() {
								superGif.move_relative(1);
							});
							// Back
							$($(box).find('.fancygif-back')).css('color','#333333').on('click', function() {
								superGif.move_relative(-1);
							});
						}
					});
				}
			}
		};
	}); // End Fancygif


});