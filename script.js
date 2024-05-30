let timerdisplay=document.querySelector('.timer-display');
let stopbtn=document.getElementById('stopbtn');
let startbtn=document.getElementById('startbtn');
let resetbtn=document.getElementById('resetbtn');

let msecs = 0;
let secs =0;
let mins= 0;
let timerId=null;

startbtn.addEventListener('click',function(){
    //setInterval is a inbuilt function that takes two parameters function and timing
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId= setInterval(starttimer,10);
});

stopbtn.addEventListener('click',function(){
    clearInterval(timerId);
});

resetbtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerdisplay.innerHTML='00 : 00 : 00';
    msecs=secs=mins=0;
});
function starttimer(){
    msecs++;
    if(msecs==100){
        msecs=0;
        secs++;
        if(secs==60){
            secs=0;
            mins++;

        }
    }
    // let msecString= msecs < 10 ? '0${msec}' : msecs;
    // let secsString= secs< 10 ? '0${secs}' : secs;
    // let minString= mins < 10 ? '0${mins}' : mins;
    // // let msecString;
    // // if(msecs<10){
    // //     msecString='0${msecs}';
    // // }
    // // else{
    // //     msecString=msecs;
    // // }
    // timerdisplay.innerHTML="${minString} : ${secsString} : ${msecString}";
    let msecString = msecs < 10 ? `0${msecs}` : msecs;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    timerdisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}
