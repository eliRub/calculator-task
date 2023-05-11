function Calculator() {

    let x = document.querySelector("#x_value").value;
    let y = document.querySelector("#y_value").value;

    let is_x_number = !isNaN(x);
    let is_y_number = !isNaN(y);
    if (is_x_number === false || is_y_number === false) {
        alert("You must enter numbers only!");
        return;
    }

    x = Number(x)
    y = Number(y)
    let sum = x + y;
    let double = x * y;
    document.getElementById("sum_value").value = sum;
    document.getElementById("double_value").value = double;

}
