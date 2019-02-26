import any from '@travi/any';
import {clearTile} from '../tiles/clearTile';

function calcAttackDamage(atk, def) {
  return Math.max(atk - any.integer({min: def, max: def * 2}), 2);
}

function calcTotalDamage(player, monster) {
  const playerPhysicalDamage = calcAttackDamage(monster.atk, player.def);
  const monsterPhysicalDamage = calcAttackDamage(player.atk, monster.def);
  const playerSpecialDamage = calcAttackDamage(monster.satk, player.sdef);
  const monsterSpecialDamage = calcAttackDamage(player.satk, monster.sdef);

  return {
    playerDamage: (playerPhysicalDamage + playerSpecialDamage) / any.integer({min: 1, max: 2}),
    monsterDamage: (monsterPhysicalDamage + monsterSpecialDamage) / any.integer({min: 1, max: 2}),
  };
}

export function attackMonster({store, logEvent, monster, position}) {
  const map = store.get('map');
  const playerStats = {
    atk: store.get('atk'),
    def: store.get('def'),
    satk: store.get('satk'),
    sdef: store.get('sdef'),
  };

  console.log(monster);

  const {playerDamage, monsterDamage} = calcTotalDamage(playerStats, monster);
  const [posX, posY] = position;

  const monsterHp = monster.hp - monsterDamage;
  const playerHp = store.get('hp') - playerDamage;

  store.set('hp')(playerHp);

  if (monsterHp > 0) {
    logEvent(`You strike the ${monster.type} for ${monsterDamage} damage.`);
    logEvent(`You take ${playerDamage} damage in return`);
    map[posX][posY].data.hp = monsterHp;

    return undefined;
  } else {
    logEvent(`You strike the ${monster.type} for ${monsterDamage} damage.`);
    logEvent(`The ${monster.type} has been slain.`);
    logEvent(`In the scuffle you take ${playerDamage} damage.`);

    monster.drops.forEach(drop => {
      logEvent(`The ${monster.type} dropped a ${drop.name}`);
      store.set('items')([...store.get('items'), drop]);
    });

    clearTile(position, map);

    return position;
  }
}
