export function attackMonster({store, logEvent, monster, position}) {
  console.log(monster);

  monster.drops.forEach(drop => {
    console.log(drop);
    store.set('items')([...store.get('items'), drop]);
  });

  return position;
}
