/**
 *
 * @authors WFE_jackiejiang (jackiejiang@tencent.com)
 * @date    2015/4/29 17:33
 */

(function(){
    function Music( musicobj ){
        if(!musicobj.music || musicobj.music == "none") return;
        var self = musicobj.self,
            head = $("head"),
            $audiodom = $('<span class="u-audio"><audio src="'+musicobj.music+'" loop="loop"></audio></span>');
        	$audiostyle = $('<style>.u-audio{position:fixed;left:10px;top:10px;width:25px;height:25px;background:url(upload/off.png) no-repeat;background-size:25px; 25px;z-index:999;border:2px solod #000;}.u-play{background:url(upload/on.png) no-repeat;background-size:25px; 25px;border:2px solod #000;}</style>');

        $.extend(self,{
            getaudio: function(){
                return $audiodom;
            },
            audioplay: function(){
                $audiodom.find("audio")[0].play();
                $audiodom.addClass("u-play");
            },
            audiostop: function(){
                $audiodom.find("audio")[0].pause();
                $audiodom.removeClass("u-play");
            },
            getplaystats: function(){
                var e = $audiodom.find("audio")[0];
                return e.paused;
            },
            autoplay: false
        });

        $audiodom.on("tap",function(){
            if($audiodom.hasClass("u-play")){
                _bgmusic = false;
                self.audiostop();
            }else{
                self.audioplay();
                _bgmusic = true;
            }
        });

        self.append($audiodom);
        head.append($audiostyle);

        self.audioplay();

        var _handler = function(){
            if(!self.autoplay){
                self.audioplay();
                self.autoplay = true;
            }
            document.removeEventListener("touchstart",_handler,false);
        }

        //setTimeout(function(){
        //    if(self.getplaystats()){
        //        self.audiostop();
        //        document.addEventListener("touchstart",_handler,true);
        //    }
        //},3000);
    }

    $.music = function( src ){
        var music = {
            music: src || false,
            self: $("body")
        }
        if(music.self.data("music")) return;

        Music(music);
        music.self.data("music",music.music);
        return $;
        console.log(1)
    }
})();