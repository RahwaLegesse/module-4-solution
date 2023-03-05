(function(window){
    var goodbyespeaker={};
 var speakword = "Hello"
   
    goodbyespeaker.speak=function(){
        var names1=["rahwa","esayas","john"]
        for(var i=0;i<names1.length;i++)
        {
            var name4=new Array();
             var name4=names1[i]
            var name5=name4.charAt(0)
    
        if(name5 !='j' && name5 !='J')
        {
            console.log(speakword + " "+ name4);
        }
    }
     }
    window.goodbyespeaker=goodbyespeaker;

})(window);
