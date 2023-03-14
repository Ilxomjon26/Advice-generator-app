fetch("https://api.adviceslip.com/advice").then((response) => {
    return response.json();
}).then((adviceObj) => {
    const advice = adviceObj.slip;
    $(".p1").text("ADVICE #" + advice.id)
    $(".p2").text('"' + advice.advice + '"')
});

$(document).ready(function(){
    let desktopSize = window.matchMedia("(min-width: 376px)");
    if (desktopSize.matches){
        $(".logo").click(function(){
            fetch("https://api.adviceslip.com/advice").then((response) => {
                return response.json();
            }).then((adviceObj) => {
                const advice = adviceObj.slip;
                $(".p1").text("ADVICE #" + advice.id)
                $(".p2").text('"' + advice.advice + '"')
            });
        })
    }
    else {
        $(".logo").click(function(){
            fetch("https://api.adviceslip.com/advice").then((response) => {
                return response.json();
            }).then((adviceObj) => {
                const advice = adviceObj.slip;
                $(".p1").text("ADVICE #" + advice.id)
                $(".p2").text('"' + advice.advice + '"')
            });            
        })        
    }
});