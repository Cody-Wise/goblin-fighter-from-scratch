

import { renderGoblins } from './render-utils.js';

const formEl = document.querySelector('form');
const goblinList = document.querySelector('#goblin-list');
const playerHPEl = document.querySelector('#player-hp');
const goblinsDefeatedEl = document.querySelector('#goblins-defeated');


let playerHP = 10;
let goblinsDefeated = 0;

const georgeImageId = Math.floor(Math.random() * 4);
const jaredImageId = Math.floor(Math.random() * 4);
const beauImageId = Math.floor(Math.random() * 4);

const goblins = [{ name: 'George', hp: 2, image_id:georgeImageId }, { name: 'Jared', hp: 5, image_id:jaredImageId }, { name: 'Beau', hp: 5, image_id: beauImageId }

];
displayGoblins();



formEl.addEventListener('submit', (e) => {
    
    e.preventDefault();

    const data = new FormData(formEl);

    const newGoblin = {

        name: data.get('form-name'),
        hp: 3, 
        image_id: Math.floor(Math.random() * 4),

    };
    if (playerHP > 0){
        goblins.unshift(newGoblin);

        displayGoblins();

        formEl.reset();
    } else {
        alert('You are dead Stop Clicking');
    }
});


function displayGoblins(){

    goblinList.textContent = '';

    playerHPEl.textContent = `Player HP is ${playerHP}`;

    for (let goblin of goblins) {
        const goblinEl = renderGoblins(goblin);

        if (goblin.hp && playerHP > 0){
            goblinEl.addEventListener('click', () => {


            
                if (Math.random() < 0.5){
                    goblin.hp--;
                    alert(goblin.name + ' got hit');

                } else { alert('missed');
                }

                if (Math.random() < 0.33){
                    playerHP--;
                    playerHPEl.textContent = `Your HP is ${playerHP}`;
                    alert('You were hit');
                } else { alert(goblin.name + ' missed');
                }

                if (goblin.hp === 0){
                    goblinsDefeated++;
                    goblinsDefeatedEl.textContent = `You have Vanquished ${goblinsDefeated} Goblins`;

                    
                }
              
                if (playerHP === 0){
                    alert('Game Over');
                }
              
            
                displayGoblins();
            
            });

        }

        goblinList.append(goblinEl);
    }

    

}
