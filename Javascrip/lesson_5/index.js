function kiemtra() {
let a = document.getElementById("num1").Value;
    let b = document.getElementById("num2").Value;
    let c = document.getElementById("num3").Value;
    let result = "";
    if (a > b) {
        if (a > c) {
            result = a + " là số lớn nhất";
        }
        else {
            result = c + "là số lớn nhất";
        }

    }
    else if (b > c) {
          result = b + "là số lớn nhất";
    }
alert(result);

}