import {GHOUL, GOBLIN, SKELETON, ORC, ZOMBIE} from './monsters';

export const ranges = {
  [GHOUL]: {
    hp: {
      min: 5,
      max: 10,
    },
    mp: {
      min: 5,
      max: 10,
    },
    atk: {
      min: 2,
      max: 7,
    },
    def: {
      min: 1,
      max: 6,
    },
    satk: {
      min: 5,
      max: 10,
    },
    sdef: {
      min: 3,
      max: 10,
    },
  },
  [GOBLIN]: {
    hp: {
      min: 5,
      max: 11,
    },
    mp: {
      min: 6,
      max: 12,
    },
    atk: {
      min: 3,
      max: 9,
    },
    def: {
      min: 3,
      max: 10,
    },
    satk: {
      min: 7,
      max: 12,
    },
    sdef: {
      min: 5,
      max: 13,
    },
  },
  [SKELETON]: {
    hp: {
      min: 6,
      max: 13,
    },
    mp: {
      min: 8,
      max: 14,
    },
    atk: {
      min: 5,
      max: 11,
    },
    def: {
      min: 4,
      max: 12,
    },
    satk: {
      min: 8,
      max: 15,
    },
    sdef: {
      min: 6,
      max: 12,
    },
  },
  [ORC]: {
    hp: {
      min: 8,
      max: 20,
    },
    mp: {
      min: 2,
      max: 8,
    },
    atk: {
      min: 10,
      max: 15,
    },
    def: {
      min: 10,
      max: 15,
    },
    satk: {
      min: 1,
      max: 5,
    },
    sdef: {
      min: 4,
      max: 10,
    },
  },
  [ZOMBIE]: {
    hp: {
      min: 7,
      max: 14,
    },
    mp: {
      min: 5,
      max: 10,
    },
    atk: {
      min: 8,
      max: 14,
    },
    def: {
      min: 7,
      max: 13,
    },
    satk: {
      min: 4,
      max: 10,
    },
    sdef: {
      min: 4,
      max: 8,
    },
  },
};
