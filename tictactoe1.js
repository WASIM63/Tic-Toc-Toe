let boxes = document.querySelectorAll(".box");
let count = 0;
let me = 0;
let comp = 0;
let btn = document.querySelector(".btn");
let win = 0;
let sum = 0;
let click = 0;
let winclick = 0;
let draw = 0;
let X = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let O = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let B = [0, 0, 0, 0, 0, 0, 0, 0, 0];

document.querySelector(".finish").classList.add("turn");
document.querySelector(".me").classList.add("yellow2");
document.querySelector(".com").classList.remove("yellow2");    
clickable();



btn.onclick = () => {///🟠🟠🟠🟠🟠Button
    for (box of boxes) {
        box.classList.remove("cross", "circle", "wrong", "green1");
    }
    sum = 0;
    click = 0;
    winclick = 0;
    X = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    O = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    B = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    document.querySelector(".finish").innerText = "";
    document.querySelector(".me").classList.remove("yellow2");
    document.querySelector(".com").classList.remove("yellow2");

    if (win == 1) {
        document.querySelector(".me").classList.add("yellow2");
        document.querySelector(".com").classList.remove("yellow2");    
        document.querySelector(".finish").classList.add("turn");
        clickable();
        win--;
    }
    else {
        document.querySelector(".me").classList.remove("yellow2");
        document.querySelector(".com").classList.add("yellow2");    
        non_clickable();
        win++;
    }

}

function clickable() {//✅✅✅✅✅✅✅
    class box {
        constructor(box_no) {
            boxes[box_no].onclick = () => {
                console.log("clicked");
                count++;
                if (click == 0 && winclick == 0) {//🟠🟠🟠1st human
                    if (B[box_no] == 0) {
                        sum += 2;
                        console.log("sum=", sum);
                        boxes[box_no].classList.add("cross");
                        document.querySelector(".finish").classList.remove("turn");
                        document.querySelector(".com").classList.add("yellow2");
                        document.querySelector(".me").classList.remove("yellow2");
                        click++;
                        B[box_no] = 1;
                        if (sumX(X, box_no) == 1) {
                            click++;
                            winclick++;
                            document.querySelector(".finish").classList.remove("turn");
                            document.querySelector(".me").classList.remove("yellow2");
                            document.querySelector(".com").classList.remove("yellow2");                        
                            document.querySelector(".finish").innerText = (`You won 🥳`);
                            me++;
                            document.querySelector(".m").innerText = me;
                            count = 1;
                            return;
                        }
                        // for computer
                        if (winclick == 0) {
                            setTimeout(() => {
                                let ran = Math.floor(Math.random() * 9);
                                console.log(ran);
                                while (B[ran] != 0) {
                                    if (sum >= 10) {
                                        document.querySelector(".finish").classList.remove("turn");
                                        document.querySelector(".me").classList.remove("yellow2");
                                        document.querySelector(".com").classList.remove("yellow2");                                    
                                        document.querySelector(".finish").innerText = ("OOPs! it's a draw😅");
                                        draw++;
                                        break;
                                    }
                                    else {
                                        ran = Math.floor(Math.random() * 9);
                                        console.log(ran);
                                    }
                                }
                                boxes[ran].classList.add("circle");
                                click--;
                                if (draw == 0) {
                                    document.querySelector(".finish").classList.add("turn");
                                    document.querySelector(".me").classList.add("yellow2");
                                    document.querySelector(".com").classList.remove("yellow2");                                
                                }
                                B[ran] = 1;
                                if (sumO(O, ran) == 1) {
                                    click++;
                                    winclick++;
                                    document.querySelector(".finish").classList.remove("turn");
                                    document.querySelector(".me").classList.remove("yellow2");
                                    document.querySelector(".com").classList.remove("yellow2");                                
                                    document.querySelector(".finish").innerText = (`You lossed🥲`);
                                    comp++;
                                    document.querySelector(".c").innerText = comp;
                                    count = 0;
                                    return;
                                }


                            }, 1000)
                        }
                    }
                    else {
                        boxes[box_no].classList.add("wrong");
                        count++;
                    }
                    
                }
                // click--;

            }
        }
    }
    new box(0);
    new box(1);
    new box(2);
    new box(3);
    new box(4);
    new box(5);
    new box(6);
    new box(7);
    new box(8);
}



function non_clickable() {//❌❌❌❌❌❌❌
    if (click == 0 && winclick == 0) {
        click++;
        setTimeout(() => {
            console.log("computer click korche");
            let isclicked = false;
            let ran = Math.floor(Math.random() * 9);
            while (B[ran] != 0) {
                ran = Math.floor(Math.random() * 9);
                console.log("random=", ran);
            }
            boxes[ran].classList.add("circle");
            sum += 2;
            document.querySelector(".finish").classList.add("turn");
            document.querySelector(".me").classList.add("yellow2");
            document.querySelector(".com").classList.remove("yellow2");        
            B[ran] = 1;
            if (sumO(O, ran) == 1) {
                click++;
                winclick++;
                document.querySelector(".finish").classList.remove("turn");
                document.querySelector(".me").classList.remove("yellow2");
                document.querySelector(".com").classList.remove("yellow2");            
                document.querySelector(".finish").innerText = (`You lossed🥲`);
                comp++;
                document.querySelector(".c").innerText = comp;
                count = 0;
                return;
            }
        }, 1000);

    }
    click--;
    clickable();
}




// 🟠backend
function sumX(X, box_no) {
    let XX = [];
    X[box_no] = 1;
    XX[0] = (X[0] + X[1] + X[2]);
    XX[1] = (X[3] + X[4] + X[5]);
    XX[2] = (X[6] + X[7] + X[8]);
    XX[3] = (X[0] + X[3] + X[6]);
    XX[4] = (X[1] + X[4] + X[7]);
    XX[5] = (X[2] + X[5] + X[8]);
    XX[6] = (X[0] + X[4] + X[8]);
    XX[7] = (X[2] + X[4] + X[6]);
    if (XX[0] == 3 || XX[1] == 3 || XX[2] == 3 || XX[3] == 3 || XX[4] == 3 || XX[5] == 3 || XX[6] == 3 || XX[7] == 3) {
        let i = 0;
        for (i = 0; i < 8; i++) {
            if (XX[i] == 3) {
                switch (i) {
                    case 0: {
                        boxes[0].classList.add("green1");
                        boxes[1].classList.add("green1");
                        boxes[2].classList.add("green1");
                        break;
                    };
                    case 1: {
                        boxes[3].classList.add("green1");
                        boxes[4].classList.add("green1");
                        boxes[5].classList.add("green1");
                        break;
                    };
                    case 2: {
                        boxes[6].classList.add("green1");
                        boxes[7].classList.add("green1");
                        boxes[8].classList.add("green1");
                        break;
                    };
                    case 3: {
                        boxes[0].classList.add("green1");
                        boxes[3].classList.add("green1");
                        boxes[6].classList.add("green1");
                        break;
                    };
                    case 4: {
                        console.log("hello");
                        boxes[1].classList.add("green1");
                        boxes[4].classList.add("green1");
                        boxes[7].classList.add("green1");
                        break;
                    };
                    case 5: {
                        boxes[2].classList.add("green1");
                        boxes[5].classList.add("green1");
                        boxes[8].classList.add("green1");
                        break;
                    };
                    case 6: {
                        boxes[0].classList.add("green1");
                        boxes[4].classList.add("green1");
                        boxes[8].classList.add("green1");
                        break;
                    };
                    case 7: {
                        boxes[2].classList.add("green1");
                        boxes[4].classList.add("green1");
                        boxes[6].classList.add("green1");
                        break;
                    }
                    default: console.log("fault");
                }
            }
        }
        console.log("X won");
        return 1;
    }
}

function sumO(O, box_no) {
    let OO = [];
    O[box_no] = 1;
    OO[0] = (O[0] + O[1] + O[2]);
    OO[1] = (O[3] + O[4] + O[5]);
    OO[2] = (O[6] + O[7] + O[8]);
    OO[3] = (O[0] + O[3] + O[6]);
    OO[4] = (O[1] + O[4] + O[7]);
    OO[5] = (O[2] + O[5] + O[8]);
    OO[6] = (O[0] + O[4] + O[8]);
    OO[7] = (O[2] + O[4] + O[6]);
    if (OO[0] == 3 || OO[1] == 3 || OO[2] == 3 || OO[3] == 3 || OO[4] == 3 || OO[5] == 3 || OO[6] == 3 || OO[7] == 3) {
        let i = 0;
        for (i = 0; i < 8; i++) {
            if (OO[i] == 3) {
                switch (i) {
                    case 0: {
                        boxes[0].classList.add("green1");
                        boxes[1].classList.add("green1");
                        boxes[2].classList.add("green1");
                        break;
                    };
                    case 1: {
                        boxes[3].classList.add("green1");
                        boxes[4].classList.add("green1");
                        boxes[5].classList.add("green1");
                        break;
                    };
                    case 2: {
                        boxes[6].classList.add("green1");
                        boxes[7].classList.add("green1");
                        boxes[8].classList.add("green1");
                        break;
                    };
                    case 3: {
                        boxes[0].classList.add("green1");
                        boxes[3].classList.add("green1");
                        boxes[6].classList.add("green1");
                        break;
                    };
                    case 4: {
                        console.log("hello");
                        boxes[1].classList.add("green1");
                        boxes[4].classList.add("green1");
                        boxes[7].classList.add("green1");
                        break;
                    };
                    case 5: {
                        boxes[2].classList.add("green1");
                        boxes[5].classList.add("green1");
                        boxes[8].classList.add("green1");
                        break;
                    };
                    case 6: {
                        boxes[0].classList.add("green1");
                        boxes[4].classList.add("green1");
                        boxes[8].classList.add("green1");
                        break;
                    };
                    case 7: {
                        boxes[2].classList.add("green1");
                        boxes[4].classList.add("green1");
                        boxes[6].classList.add("green1");
                        break;
                    }
                    default: console.log("fault");
                }
            }
        }
        console.log("O won");
        return 1;
    }
}
