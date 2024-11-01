function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementsByClassName("hours")[0].innerText = `${hours}:`;     // hum ye simple tarike se bhi kar sakte hai 
    document.getElementsByClassName("minutes")[0].innerText =`${minutes}:`;  // const timing = `${hours}:${minutes}:${seconds}`;
    document.getElementsByClassName("seconds")[0].innerText = `${seconds}`;  // document.getElementById("clock").innerText=timing;
                                                                            // is tarah se bhi code chal sakta hai easily
}


setInterval(updateTime, 1000);


updateTime();


