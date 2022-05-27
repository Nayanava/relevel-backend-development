document.getElementById("submit").onclick = function(event) {
    const targetTime = document.getElementById("dateTime").value;
    let interval = setInterval((targetTime) => {
        calculateTime(targetTime);
    }, 1, targetTime);
}

function calculateTime(targetTime) {
    let currentTime = new Date();
    let diff = new Date(targetTime).getTime() - currentTime.getTime();

    if(diff < 0) {
        clearInterval(interval);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        document.getElementById('milliseconds').innerText = 0;
    }
    //how many days - 1 day = 24 * 60 * 60 * 1000
    // 10 ms and 55 ms = 55 % 10 = 5 days and 5 ms
    // 5 days and 4 hours - (5 * (24 * 60 * 60 * 1000) + 4 * (60 * 60 * 1000)) % (24 * 60 * 60 * 1000)
    // (a + b) % c = a %c + b % c;  
    // 99 % 100 = 99... (0 - 99)
    // 99 % 10 = 9... (0 - 9)
    document.getElementById("days").innerText = Math.floor(diff / (24 * 60 * 60 * 1000));
    const hours = diff % (24 * 60 * 60 * 1000) 
    document.getElementById("hours").innerText = Math.floor(hours / (60 * 60 * 1000));

    const minutes = diff % (60 * 60 * 1000);
    document.getElementById("minutes").innerText = Math.floor(minutes / (60 * 1000));

    const seconds = diff % (60 * 1000);
    document.getElementById("seconds").innerText = Math.floor(seconds / (1000));

    document.getElementById('milliseconds').innerText = (diff % 1000);
}