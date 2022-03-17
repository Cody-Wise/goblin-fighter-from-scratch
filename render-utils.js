export function renderGoblins(goblin){

    const goblinsEl = document.createElement('div');
    const goblinsName = document.createElement('p');
    const goblinsHP = document.createElement('p');
  
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
    goblinsHP.textContent = `${goblin.hp} ${goblinEmoji}`;

    goblinsEl.append(goblinsName, goblinsHP);

    return goblinsEl;

}