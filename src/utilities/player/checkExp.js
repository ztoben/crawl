export function checkExp(store, monster, logEvent) {
  if (store.get('exp') + monster.experience >= store.get('expRequired')) {
    const level = store.get('level') + 1;

    logEvent(`You have leveled up to ${level}`);
    store.set('expRequired')(level * 10);
    store.set('level')(level);
    store.set('exp')(0);
  } else {
    store.set('exp')(store.get('exp') + monster.experience);
  }
}
