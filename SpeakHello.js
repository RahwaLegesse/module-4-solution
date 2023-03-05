(function(window){
    var hellospeaker={};
 var speakword = "goodbye"
   
    hellospeaker.speak=function(){
        var names=["rahwa","esayas","john"]
        for(var i=0;i<names.length;i++)
        {
            var name1=new Array();
             name1=names[i]
            var name2=name1.charAt(0)
    
        if(name2=='j' ||name2=='J')
        {
            console.log(speakword + " "+ name1);
        }
    }
     }
    window.hellospeaker=hellospeaker;

})(window);
