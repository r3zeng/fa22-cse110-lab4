function printTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

function repeat(){
    setTimeout(() => {
        printTime();
        repeat();
    }, "1000")
}

repeat();
