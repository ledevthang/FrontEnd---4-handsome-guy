var demo1 = "Yolo";
function myFunction() {
    document.getElementById("demo").innerHTML = demo1;
}
function myFunction1() {

    document.getElementById("demo2").innerHTML = demo1; /* Lỗi undefined nếu để dòng lệnh này*/
}