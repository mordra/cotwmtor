import {GameScreen, GameArea} from '/client/enums/maps';
import {cotw} from '/client/enums/enums.jsx';
import { routeActions } from 'redux-simple-router';

let _store;
const onKeyPress = (e, store) => {
  _store = store;
  var state = store.getState();
  if (state.game.screen === GameScreen.Map) {
    var dir = calculateDirection(e);

    if (followLink(state.game.map[state.game.area], state.player.coords, dir))
      return;

    if (movePlayer(state.game.map[state.game.area], state.player.coords, dir))
      return;
  }

  if (e.keyCode === 27) {
    store.dispatch({type: 'SCREEN_CHANGE', screen: GameScreen.Map});
    store.dispatch(routeActions.push('/game'));
  }
};

const followLink = (area, curCoords, dir) => {
  let newCell = area[curCoords.x + dir.x][curCoords.y + dir.y];
  if (!newCell.entry)
    return false;

  if (newCell.building.screen) {
    _store.dispatch({type: 'SCREEN_CHANGE', screen: newCell.building.screen, buildingScreen: newCell.building});
    _store.dispatch(routeActions.push('/shop'));
  } else if (newCell.building.link) {
    _store.dispatch({
      type: 'AREA_CHANGE',
      area: newCell.building.link.area
    });
    let entryPoint = newCell.building.link.type.entryPoint || {x:0,y:0};
    _store.dispatch({
      type: 'PLAYER_MOVE_TELEPORT', coords: {
        x: newCell.building.link.coords[0] + entryPoint.x,
        y: newCell.building.link.coords[1] + entryPoint.y
      }
    })
  }
  return true;
};

const movePlayer = (area, curCoords, dir) => {
  var cell = area[curCoords.x + dir.x][curCoords.y + dir.y];
  if (!(cell.tile.solid || cell.building)) {
    _store.dispatch({type: 'PLAYER_MOVE', dir});
    return true;
  }
  return false;
};

const calculateDirection = (e) => {
  var dir = {x: 0, y: 0};

  switch (e.keyCode) {
    case 83:
    case 40:
      //up
      dir.y += 1;
      break;
    case 87:
    case 38:
      dir.y -= 1;
      break;
    case 68:
    case 39:
      dir.x += 1;
      break;
    case 65:
    case 37:
      dir.x -= 1;
      break;
    default:
      break;
  }

  return dir;
};

export default {onKeyPress};