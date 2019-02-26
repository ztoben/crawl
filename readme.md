# C R A W L

[![Greenkeeper badge](https://badges.greenkeeper.io/ztoben/crawl.svg)](https://greenkeeper.io/)

A dungeon crawler written in React.js

View the live version [here](http://ztoben-crawl.surge.sh/).

<img width="873" alt="capture" src="https://user-images.githubusercontent.com/4007345/49335676-c5bb3200-f5b7-11e8-922a-d377dc7f0a54.PNG">

##### Roadmap:

- [x] Generate a basic grid and movement system
- [x] Implement arrow key movement
- [x] Generate random dungeons
- [x] Create movement rules, disallow moving through walls, etc.
- [x] Connect dungeons with doors and hallways
- [x] Fix possible infinite loop while placing dungeons
- [x] Show dungeon minimap
- [x] Add a starting screen
- [x] New character screen to select name and class
- [x] Implement [Undux](https://github.com/bcherny/undux) for state management
- [x] Add player info to panel (name, class, stats, etc.)
- [ ] Build stats based on player class selection
- [x] Randomly generated collectible chests
- [x] Game log for giving updates on player status, fights, items, etc.
- [ ] Generate enemies and place them statically on the map
- [ ] Design a fighting interaction that gives updates in the log
- [ ] Use a key and lock system for the final chest to keep players from progressing too quickly
- [ ] Use [IronDb](https://github.com/gruns/irondb) for storing the game state
