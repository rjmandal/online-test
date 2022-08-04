

// document.getElementById("q1").addEventListener("click", function(){ Change(1); });
// document.getElementById("q2").addEventListener("click", function(){ Change(2); });
// document.getElementById("q3").addEventListener("click", function(){ Change(3); });

for(let i=1;i<4;i++){
    let str = "q" + i;
    document.getElementById(str).addEventListener("click", function () { Change(i); });
}

let obj1 ={
    "Question No.1" : "2",
    "Question No.2" : "1",
    "Question No.3" : "4"
}

function Change(no) {
    document.getElementById("Question No").innerHTML = `Question No.${no}`;
    document.getElementById("Question image").src = `images/q${no}.png`;
    let str = "q" + no;
    document.getElementById(str).style.background = "yellow";
    document.getElementById("1").checked = false;
    document.getElementById("2").checked = false;
    document.getElementById("3").checked = false;
    document.getElementById("4").checked = false;


}


var obj2 = {

}

document.getElementById('Save').onclick = function () {
    let a = document.getElementById("Question No");
    let QuesNo = a.innerText;

    var radios = document.getElementsByName("inlineRadioOptions");
    for (var radio of radios) {
        if (radio.checked && radio.value === '1') {
            var ans = "1";
            // console.log(QuesNo)
        }
        else if (radio.checked && radio.value === '2') {
            var ans = "2";
            // console.log(QuesNo)
        }
        else if (radio.checked && radio.value === '3') {
            var ans = "3";
            // console.log(QuesNo)
        }
        else if (radio.checked && radio.value === '4') {
            var ans = "4";
            // console.log(QuesNo)
        }

    }

    obj2[QuesNo] = ans;
    console.log(obj2)
}

let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () { 
    let correct = 0;
    for (let i = 1; i < 4; i++) {
        let ques = `Question No.${i}`;
        if (obj1[ques] == obj2[ques])
            correct += 1;
    }
    console.log(correct);
});