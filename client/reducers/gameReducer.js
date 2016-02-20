import {GameArea, GameScreen} from '/client/enums/maps'

let defaultState = {
  name: 'TODO: Unnamed game',
  currentBuilding: '',
  currentArea: GameArea.Village,
  currentScreen: GameScreen.Map
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        games: action.data
      };
    case 'SET_GAME_STATE':
      console.log('init game');
      return {
        ...state,
        currentBuilding: action.currentBuilding || state.currentBuilding,
        currentArea: action.area || state.currentArea,
        currentScreen: action.screen || state.currentScreen
      };
    default:
      return state;
  }
};
