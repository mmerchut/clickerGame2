
const jobDiv = document.querySelector('.job');
const trainDiv = document.querySelector('.train');
const fightDiv = document.querySelector('.fight');
const shopDiv = document.querySelector('.shop');
const statsDiv = document.querySelector('.stats');



let level = 0;
let levelStage = 0;
let powerAttack = 0;
let pocket = 0;
let multiplyChange = false;
let min = Math.ceil(1);
let max = Math.floor(10);

const train = function() {
    levelStage++;
    console.log(levelStage);
    if( levelStage % 10 == 0) {
        level++;
        powerAttack += 5;
        statsDiv.innerHTML = `Level ${level} <br> PowerAttack ${powerAttack} <br> Coins ${pocket}`
    }
    console.log(level)
    console.log(powerAttack)
}



const addCoin = function() {
    if (!multiplyChange) {
        pocket++;
        console.log(pocket);
        statsDiv.innerHTML = `Level ${level} <br> PowerAttack ${powerAttack} <br> Coins ${pocket}`
    }
    else if (multiplyChange) {
        pocket += 5
        console.log(pocket)
        statsDiv.innerHTML = `Level ${level} <br> PowerAttack ${powerAttack} <br> Coins ${pocket}`
    }
    
}

const buyMultiply = function() {
    if(pocket >= 30) {
        multiplyChange = true;
        alert('Multiply Buyed')
    }
    else if (pocket < 30) {
        alert('Required 30 coins')
    }
    
}

const fight = function() {
if (level >= 1 && pocket >= 30) {
  let x = ''
  x = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(x)

  let y = ''

  y = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(y)

  if( x > y ) {
      pocket += 20;
      level += 2;
      powerAttack += 30;
      statsDiv.innerHTML = `Level ${level} <br> PowerAttack ${powerAttack} <br> Coins ${pocket}`
  }
  else {
      pocket -= 10;
      level -= 1;
      powerAttack -= 20;
      statsDiv.innerHTML = `Level ${level} <br> PowerAttack ${powerAttack} <br> Coins ${pocket}`
  }
}
    else {
        alert('Required: 1 Lvl, 30 coins')
    }
}

jobDiv.addEventListener('click', addCoin)
trainDiv.addEventListener('click', train)
shopDiv.addEventListener('click', buyMultiply)
fightDiv.addEventListener('click', fight)
