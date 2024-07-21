const clock = document.getElementById(`clock`)



setInterval(function(){
    let date = new Date()
    let ndate = date.toLocaleDateString()
    let time = date.toLocaleTimeString()
    clock.innerHTML = `<span class="date">${ndate}</span><br><span class="time">${time}</span>`;

},1000)