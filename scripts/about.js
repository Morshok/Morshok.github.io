var hiddenAudioSourceFadeInAndOutTime = 250;

$(".about-self-portrait").hover(
    function() {
        $(this).css(
            {
                opacity: 0.5
            }
        );
        $(".hidden-audio-source").fadeIn(hiddenAudioSourceFadeInAndOutTime);
        $(".hidden-audio-source").css(
            { 
                display: 'block',
            }
        );
    }, 
    function() {
        $(this).css("opacity", 1);
        
        var isHiddenAudioSourceHovered = $(".hidden-audio-source").is(":hover");
        if(!isHiddenAudioSourceHovered)
        {
            $(".hidden-audio-source").fadeOut(hiddenAudioSourceFadeInAndOutTime, function() {
                $('.hidden-audio-source').css(
                    {    
                        display: 'none'
                    }
                );
            });
        }
    }
);
$(".hidden-audio-source").hover(
    function() {
        $(this).css(
            {
                display: 'block',
            }
        );
        $(".about-self-portrait").css(
            {
                opacity: 0.5
            }
        );
    }
);