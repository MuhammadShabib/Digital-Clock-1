let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")


setInterval(() => {
    let curentTime = new Date()

    hour.innerText = (curentTime.getHours() < 10 ? "0" : "") + curentTime.getHours();
    minute.innerText = (curentTime.getMinutes() < 10 ? "0" : "") + curentTime.getMinutes();
    second.innerText = (curentTime.getSeconds() < 10 ? "0" : "") + curentTime.getSeconds();


}, 1000)