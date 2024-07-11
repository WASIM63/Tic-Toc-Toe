let player1 = prompt("Enter name of Player_1");
let player2 = prompt("Enter name of Player_2");
document.querySelector(".player1").innerText = `${player1}(X)`;
document.querySelector(".player2").innerText = `${player2}(O)`;
let count = 0;
let me = 0;
let comp = 0;
let btn = document.querySelector(".btn");
let win = 0;
let click = 0;
let draw=1;
let clicked1=[1,1,1,1,1,1,1,1,1];

btn.onclick = () => {
    for (box of boxes) {
        box.classList.remove("cross", "circle", "wrong", "green1");
    }
    document.querySelector(".finish").innerText ="";
    document.querySelector(".player1").classList.remove("yellow1");
    document.querySelector(".player2").classList.remove("yellow1");
    draw=1;

    X = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    O = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    clicked1=[1,1,1,1,1,1,1,1,1];
    click = 0;

    if (win == 0) {
        document.querySelector(".player2").classList.add("yellow1");
        win++;
    }
    else {
        document.querySelector(".player1").classList.add("yellow1");
        win--;
    }
}


function js(box_no) {
    if (click == 0) {
        count++;
        let str = boxes[box_no].getAttribute("class");
        let isclicked = false;
        for (let i of str) {
            if (i == "c") {
                isclicked = true;
            }
        }
        if (!isclicked) {
            if (count % 2 != 0 && count != undefined) {
                document.querySelector(".player1").classList.remove("yellow1");
                document.querySelector(".player2").classList.add("yellow1");
                boxes[box_no].classList.add("cross");
                clicked1[box_no]=0;
                if (sumX(box_no) == 1) {
                    click++;
                    document.querySelector(".player2").classList.remove("yellow1");
                    document.querySelector(".finish").innerText = (`${player1} won 🥳`);
                    me++;
                    document.querySelector(".m").innerText = me;
                    count = 1;
                }
            
            }
            if (count % 2 == 0 && count != undefined) {
                boxes[box_no].classList.add("circle");
                clicked1[box_no]=0;
                document.querySelector(".player2").classList.remove("yellow1");
                document.querySelector(".player1").classList.add("yellow1");

                if (sumO(box_no) == 1) {
                    click++;
                    document.querySelector(".player1").classList.remove("yellow1");
                    document.querySelector(".finish").innerText = (`${player2} won 🥳`);
                    comp++;
                    document.querySelector(".c").innerText = comp;
                    count = 0;
                }
            }
        }
        else {
            boxes[box_no].classList.add("wrong");
            count++;
        }
        if(Math.max(...clicked1)==0 && click==0){
            document.querySelector(".finish").innerText = ("OOPs! it's a draw😅");
        }
    }
    
}
let boxes = document.querySelectorAll(".box");


class box {
    constructor(box_no) {
        document.querySelector(".player1").classList.add("yellow1");
        boxes[box_no].onclick = () => {
            console.log("clicked");
            js(box_no);
        }
    }
}
let A = new box(0);
let B = new box(1);
let C = new box(2);
let D = new box(3);
let E = new box(4);
let F = new box(5);
let G = new box(6);
let H = new box(7);
let I = new box(8);


// 🟠backend
let X = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let XX = [];
function sumX(box_no) {
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
        draw=0;
        return 1;
    }
    
}

let O = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let OO = [];
function sumO(box_no) {
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
        draw=0;
        return 1;
    }
}
