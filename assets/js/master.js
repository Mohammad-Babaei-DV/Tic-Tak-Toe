



//************************************************************* Selections ⬇️
let X = document.getElementById('X')
let O = document.getElementById('O')
let D = document.getElementById('D')
let h2 = document.getElementById('h2')
let score = document.getElementById('score')
let d1 = document.querySelectorAll('.main>.d1')
let d2 = document.querySelectorAll('.main>.d2')
let d3 = document.querySelectorAll('.main>.d3')
let d4 = document.querySelectorAll('.main>.d4')
let d5 = document.querySelectorAll('.main>.d5')
let d6 = document.querySelectorAll('.main>.d6')
let d7 = document.querySelectorAll('.main>.d7')
let d8 = document.querySelectorAll('.main>.d8')
let para = document.getElementById('para')
let reset = document.getElementById('reset')
let div = document.querySelectorAll('.main>div')
let draw = 0
let winner = ''
const db = []
flag = 1
let watch = 0
let catt = 0
pxx = 0
poo = 0
drw = 0
X.innerHTML = ' Player X :  ' + ' ' + pxx + ' '
O.innerHTML = ' Player O :  ' + ' ' + poo + ' '
D.innerHTML = ' Draw :' + ' ' + drw + ' '

//**************************************************************** Entrance ⬇️
setTimeout(headerr, 1000);
setTimeout( general, 10500);
function headerr() {
    h2.style.right = '20px'
    h2.style.height = '50px'
    h2.style.fontSize = '30px'
    h2.style.color = 'white'
    score.style.top = '10px'

}
setInterval(() => {
    if (catt <= 2) {
        fig.style.bottom = '-30px'
        catt++
    } else {
        fig.style.bottom = '-400px'
        fig.style.visibility = 'hidden'
        fig.style.opacity = 0
    }
    if (catt == 3) {
        setTimeout(() => {
            reset.style.marginRight = '130px'
        }, 2100);
    }
}, 2100);



function general() {
    
    //************************************************************************ One click ⬇️  

    div.forEach((val) => {
        val.addEventListener('click', () => {
            if ((val.getAttribute('data-status')) == 'off') {
                if (flag % 2) {
                    val.innerHTML = 'X'
                    val.style.color = 'tomato'
                } else {
                    val.innerHTML = 'O'
                    val.style.color = 'blue'
                }
                flag++
                val.setAttribute("data-status", 'on')
            } else {
                if (val.getAttribute('data-status') == 'off') {
                    val.innerHTML = ''
                }
            }

            check1()

        })
    })

    //*************************************************************** Background changing ⬇️

    function check2() {
        if (db[0] == db[1] && db[1] == db[2] && db[0] != '') {

            d1.forEach((val) => {
                val.style.backgroundColor = 'lightgreen'
            })
        }
        if (db[3] == db[4] && db[3] == db[5] && db[3] != '') {

            d2.forEach((val) => {
                val.style.backgroundColor = 'lightgreen'
            })
        }
        if (db[6] == db[7] && db[6] == db[8] && db[6] != '') {

            d3.forEach((val) => {
                val.style.backgroundColor = 'lightgreen'
            })
        }
        if (db[0] == db[3] && db[3] == db[6] && db[0] != '') {

            d4.forEach((val) => {
                val.style.backgroundColor = 'lightgreen'
            })
        }
        if (db[1] == db[4] && db[4] == db[7] && db[1] != '') {

            d5.forEach((val) => {
                val.style.backgroundColor = 'lightgreen'
            })
        }
        if (db[2] == db[5] && db[2] == db[8] && db[2] != '') {

            d6.forEach((val) => {
                val.style.backgroundColor = 'lightgreen'
            })
        }
        if (db[0] == db[4] && db[0] == db[8] && db[0] != '') {

            d7.forEach((val) => {
                val.style.backgroundColor = 'lightgreen'
            })
        }
        if (db[2] == db[4] && db[2] == db[6] && db[2] != '') {

            d8.forEach((val) => {
                val.style.backgroundColor = 'lightgreen'
            })
        }
    }




    //************************************************************ Scores - Winner - draw - stopSelecting  ⬇️  

    //************************************************************ Scores⬇️

    function check3() {
        if ((winner == 'X') && (watch == 1)) {
            pxx++
            X.innerHTML = ' Player X :  ' + ' ' + pxx + ' '
        } else if ((winner == 'O') && (watch == 1)) {
            poo++
            O.innerHTML = ' Player O :  ' + ' ' + poo + ' '
        }
    }

    //******************************** Winner⬇️
    function check1() {
        div.forEach((val, i) => {

            db[i] = val.innerHTML
        });
        // console.log(db);
        switch (true) {
            case db[0] == db[1] && db[1] == db[2] && db[0] != '': winner = db[0]; break;
            case db[0] == db[3] && db[3] == db[6] && db[0] != '': winner = db[0]; break;
            case db[1] == db[4] && db[4] == db[7] && db[1] != '': winner = db[1]; break;
            case db[2] == db[5] && db[2] == db[8] && db[2] != '': winner = db[2]; break;
            case db[6] == db[7] && db[6] == db[8] && db[6] != '': winner = db[6]; break;
            case db[3] == db[4] && db[3] == db[5] && db[3] != '': winner = db[3]; break;
            case db[0] == db[4] && db[0] == db[8] && db[0] != '': winner = db[0]; break;
            case db[2] == db[4] && db[2] == db[6] && db[2] != '': winner = db[2]; break;
            case db[0] != '' && db[1] != '' && db[2] != '' && db[3] != '' && db[4] != '' && db[5] != '' && db[6] != '' && db[7] != '' && db[8] != '': draw = 1; break
            // case db[1] == db[6] && db[1] == db[8] && db[4] == db[8] && db[1] != '': draw = 1; break;
            // case db[0] == db[7] && db[0] == db[2] && db[0] == db[4] && db[0] != '': draw = 1; break;
            // case db[2] == db[8] && db[2] == db[3] && db[2] == db[4] && db[2] != '': draw = 1; break;
            // case db[0] == db[6] && db[0] == db[5] && db[0] == db[4] && db[0] != '': draw = 1; break;
            // case db[0] == db[2] && db[0] == db[6] && db[0] == db[8] && db[0] != '': draw = 1; break;
        }

        if (winner != '') {
            check2()
            stop()
            watch++
            check3()
            para.innerHTML = 'Player' + ' ' + winner + ' ' + 'Won 😎'
             
        }

        //*************************** draw ⬇️ 

        if (draw == 1) {
            para.innerHTML = 'Draw 🙄'
            drw++
            D.innerHTML = ' Draw :' + ' ' + drw + ' '
            stop()
            setTimeout(() => {
                Reset()
            }, 800);
        }

        //*************** stopSelecting ⬇️
        function stop() {
            div.forEach((val) => {
                if (val.getAttribute('data-status') == 'off') {
                    val.setAttribute("data-status", 'on')
                }
            })
        }
    }


    //******************************************************** reset btn ⬇️

    reset.addEventListener('click', Reset)
    function Reset() {
        div.forEach((val) => {
            val.style.backgroundColor = ''
            val.innerHTML = ''
            val.setAttribute('data-status', 'off')
        })
        para.innerHTML = ''
        draw = 0
        flag = 1
        winner = ''
        watch = 0
    }

}

 