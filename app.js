let gameSeq = [];
let userSeq = [];

let btns =['red', "green", "purple", "yellow"]

let started = false;
let level  = 0;

let h2 = document.querySelector('h2');

document.addEventListener ('keypress', function(){
   
    // levelUp();
   
    if (started == false){
        console.log('game started');
        started = true;
        
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    }, 200);
}

function userbtnFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    }, 100);
}


function levelUp(){
    userSeq=[];

    level++;
    h2.innerText = `level ${level}`;

    // selection of random button
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    
    //flashing of the selwctwed random btn

    btnFlash(randBtn);
}

function checkAns (idx) {
    // let idx = level-1;
    if (gameSeq[idx]===userSeq[idx]){
        console.log("choice is matching");
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
        
    }else {
        h2.innerHTML = `Game Over - Your score was <b>${level}</b>  <br> Press any key to restart`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function() {
            document.querySelector('body').style.backgroundColor = 'white';
        },150);
        reset();
    }
}

function btnPress(){
    // console.log('btn was pressed')
    let btn = this; // this will hold the button that has been clicked
    
    userbtnFlash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll('.btn')
for (btn of allbtns){
    btn.addEventListener('click', btnPress) 
}



function reset (){
    started = false;
    gameSeq =[];
    userSeq=[];
    level = 0;
}