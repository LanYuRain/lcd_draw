let main = document.querySelector("#main");

let btnsRec = [];

for (let i = 0; i < 8; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    
    for (let j = 0; j < 5; j++) {

        let btn = document.createElement("button");
        

        btn.setAttribute("id", `${i}-${j}`);
        btn.setAttribute("class", "btns");

        btnsRec.push(0);
        row.append(btn);
        
    }
    main.append(row);
}

let out = document.createElement("p");
out.setAttribute("id", "output");
main.append(out);

let btns = document.querySelectorAll(".btns");
let output = document.querySelector("#output");

for (let btn = 0; btn < 40; btn++) {
    btns[btn].addEventListener("click", function() {
        btnUpdate(btn);
    });
}

function btnUpdate(btn) {
    if (!btnsRec[btn]){
        btns[btn].setAttribute("style", "background-color: #edf2faff;");
        btnsRec[btn] = 1;
    } else {
        btns[btn].setAttribute("style", "background-color: #619af0;");
        btnsRec[btn] = 0;
    }

    let result = "{";
    for (let i = 4; i < 40; i+=5) {
        let num = btnsRec[i] + (btnsRec[i-1]<<1) + (btnsRec[i-2]<<2) + (btnsRec[i-3]<<3) + (btnsRec[i-4]<<4);
        result += "0x" + num.toString(16) + ",";
    }
    result = result.substring(0, result.length-1);
    result += "};";
    console.log(result);

    output.innerHTML = result;

}