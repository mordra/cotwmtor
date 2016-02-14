import React from 'react';
import { connect } from 'react-redux';
import cotw from '/client/enums/enums.jsx';
import {GameScreen} from '/client/enums/maps';
import _ from 'lodash';
import createFragment from 'react-addons-create-fragment';
import MapView from './mapComponent.jsx';

const MainView = ({game, map, player}) => (
  <div>
    <h1>Welcome to Castle of the Winds - ({game.name})</h1>
    {
        <MapView map={map} player={player}/>
    }
  </div>
);

let MainContainer = connect(
  (state) => {
    return {
      map   : state.game.map[state.game.area],
      player: state.player,
      game  : state.game
    }
  },
  (dispatch) => {
    return {}
  }
)(MainView);

export default MainContainer;