let imgBox = document.getElementById("imgBox");
let qr = document.getElementById("qrImg");
let qrTxt = document.getElementById("text");


function generteQR(){
    qrImg.src =  " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTxt.value
    imgBox.classList.add("show-img");
}
