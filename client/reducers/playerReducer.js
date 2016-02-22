import {Items} from '/client/enums/cotwContent.js';
import _ from 'lodash';
import {generateItem} from '/client/core/item.js';

let defaultState = {
  gender    : 'male',
  difficulty: 1,
  name      : 'Testing',
  attributes: {
    Available   : {value: 100, name: 'Available'},
    Strength    : {value: 50, name: 'Strength'},
    Intelligence: {value: 50, name: 'Intelligence'},
    Constitution: {value: 50, name: 'Constitution'},
    Dexterity   : {value: 50, name: 'Dexterity'}
  },
  equipment : {
    armor      : null
    , neckwear   : null
    , overgarment: null
    , helmet     : null
    , shield     : null
    , bracers    : null
    , gauntlets  : null
    , weapon     : null
    , freehand   : null
    , rightring  : null
    , leftring   : null
    , belt       : null
    , boots      : null
    , pack       : null
    , purse      : null
  },
  coord     : [11, 17]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_GENDER':
      return {
        ...state,
        gender: action.gender
      };
    case 'SET_DIFFICULTY':
      return {
        ...state,
        difficulty: action.level
      };
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'SET_ATTRIBUTE':
      if (action.attr === 'Available')
        return state;
      if (state.attributes.Available.value - action.value < 0)
        return state;
      if (state.attributes[action.attr].value + action.value < 0 ||
        state.attributes[action.attr].value + action.value > 100)
        return state;

      let newAttributes = {
        ...state.attributes,
        Available: {
          ...state.attributes.Available,
          value: state.attributes.Available.value - action.value
        }
      };
      newAttributes[action.attr].value += action.value;

      return {...state, attributes: newAttributes};
    case 'PLAYER_MOVE':
      return {
        ...state,
        coord: [
          state.coord[0] + action.dir[0],
          state.coord[1] + action.dir[1]
        ]
      };
    case 'PLAYER_MOVE_TELEPORT':
      return {
        ...state,
        coord: action.coord
      };
    case 'PLAYER_EQUIP':
      return {
        ...state,
        equipment: {
          ...state.equipment,
          [action.equipmentType] : action.iid
        }
      };
    default:
      return state;
  }
};