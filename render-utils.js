export function renderGoblins(goblin){

    const goblinsEl = document.createElement('div');
    const goblinsName = document.createElement('p');
    const goblinsHP = document.createElement('p');
    const goblinsImg = document.createElement('img');

    goblinsImg.classList.add('goblin-img');
  
    goblinsEl.classList.add('goblins');

    let goblinEmoji = '';

    if (goblin.hp >= 3){

        goblinEmoji = '😈';

    } 
  
    else if (goblin.hp === 1 || goblin.hp === 2){

        goblinEmoji = '👿';

    } else if (goblin.hp === 0){

        goblinEmoji = '☠️';
    }

    goblinsName.textContent = goblin.name;
    goblinsImg.src = randomPix();
    goblinsHP.textContent = `${goblin.hp} ${goblinEmoji}`;
    

    goblinsEl.append(goblinsName, goblinsImg, goblinsHP);

    return goblinsEl;

}



function randomPix(){

    const goblinPix = new Array('./assets/goblin1.png', './assets/goblin2.png', './assets/goblin3.png', './assets/goblin4.png');
    const randomNum = Math.floor(Math.random() * goblinPix.length);

    return goblinPix[randomNum];
}

