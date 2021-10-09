const button = $("#submit");
const copybtn = $("copy");  

const slope = $("#slope-input")
const intercept = $("#intercept-input")
const from = $("#from")
const to = $("#to");

const input = $("#modal-body")
$("input[type=number]").val(0)


var clipboard = new ClipboardJS('.copy');

setValue = (val) => {
    input.val(val);
}

solve = (s, y, f, t) => {
    var d = []
    for (var i = f; i <= t; i++) {
        var a = ((s * i) + y)
        if (a == a.toFixed(2)) {
            d.push(a)
        } else {
            d.push(a.toFixed(2))
        }
    }

    console.log(d)
    return d
}

toInt = (n) => {
    return parseFloat(n, 10);
}

button.click(() => {
    var fromInt = toInt(from.val())
    var ToInt = toInt(to.val())
    
    var values = [slope.val(), intercept.val(), from.val(), to.val()]

    var running = true

    values.forEach((x) => {
        if (x != toInt(x)) {
            setValue("Invalid Character")
            alert("Invalid Character")
            running = false
            return
        }
    })
    
    console.log(running)
    if (!running) {return}
    
    if (Math.abs(ToInt - fromInt) > 50) {
        setValue("Incorrect Length");
        alert("Maximum length of set is 50");
        return;
    }

    var ans = solve(toInt(slope.val()), toInt(intercept.val()), fromInt, ToInt);
    setValue("{" + ans.join(', ') + "}")

})