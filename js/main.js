(function(){
    var tId = setInterval(function() {
        if (document.readyState == "complete") onComplete()
    }, 11);
    function onComplete(){
        clearInterval(tId);
        //alert("loaded!");
        console.log('ok')
    };
})()
