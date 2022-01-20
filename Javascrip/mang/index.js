let arr = ["nguyễn văn tài", "lê thanh bình"];
let kq = "";

function them() {
    let name = document.getElementById("name").value;
    arr.push(name);
    console.log(arr);
}

function xoa() {
    arr.pop();
}

function hienthi() {
    for (let i =0; i< arr.length; i++) {
        kq+=arr[i] + "</br>";
           document.getElementById("over").innerHTML = kq + "</br>";
    }
}