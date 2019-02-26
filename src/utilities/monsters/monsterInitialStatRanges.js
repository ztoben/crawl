import {GHOUL, GOBLIN, SKELETON, ORC, ZOMBIE} from './constants';

export const ranges = {
  [GHOUL]: {
    hp: {
      min: 15,
      max: 20,
    },
    mp: {
      min: 5,
      max: 10,
    },
    atk: {
      min: 5,
      max: 7,
    },
    def: {
      min: 4,
      max: 6,
    },
    satk: {
      min: 18,
      max: 20,
    },
    sdef: {
      min: 9,
      max: 16,
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
      min: 8,
      max: 12,
    },
    def: {
      min: 6,
      max: 13,
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
      min: 6,
      max: 16,
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
      min: 15,
      max: 25,
    },
    mp: {
      min: 2,
      max: 8,
    },
    atk: {
      min: 12,
      max: 20,
    },
    def: {
      min: 12,
      max: 17,
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
      min: 14,
      max: 18,
    },
    mp: {
      min: 5,
      max: 10,
    },
    atk: {
      min: 13,
      max: 16,
    },
    def: {
      min: 11,
      max: 19,
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
