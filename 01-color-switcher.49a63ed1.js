var body=document.querySelector("body"),btnStart=document.querySelector("[data-start]"),btnStop=document.querySelector("[data-stop"),timerId=null;function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}btnStart.addEventListener("click",(function(){btnStart.disabled=!0,btnStop.disabled=!1,timerId=setInterval((function(){body.style.backgroundColor=getRandomHexColor()}),1e3)})),btnStop.addEventListener("click",(function(){btnStart.disabled=!1,btnStop.disabled=!0,clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.49a63ed1.js.map
