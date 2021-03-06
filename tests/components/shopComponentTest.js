import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';

import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as Item from '/core/item.js';
import * as actions from '/actions/index.js';

import storeFactory from '/tests/core/testStore.js';

import {ShopView, mapState, mapDispatch} from '/client/shop/shopComponent.js';
import Equipment from '/client/player/equipmentComponent.js';
import ShopWindow from '/client/shop/shopWindowComponent.js';
import Container from '/client/misc/containerComponent.js';
import Pack from '/client/player/packComponent.js';
import Purse from '/client/player/purseComponent.js';

let store, dispatch, getState, component;
const storeSetup = () => {
  store = storeFactory();
  dispatch = store.dispatch;
  getState = store.getState;
};

const newComponent = () => {
  const props = _.extend({}, mapState(getState()));
  return shallow(<ShopView {...props}/>);
};

describe("<ShopView>", () => {
  beforeEach(() => {
    storeSetup();
    component = newComponent();
  });

  it('should render equipment and shop window and not something else', () => {
    expect(component.find(Equipment).length).toEqual(1);
    expect(component.find(ShopWindow).length).toEqual(1);
    expect(component.find(Pack).length).toEqual(1);
    expect(component.find(Container).length).toEqual(0);
  });

  it('should display the building name', () => {
    let buildings = map.generateBuildings(store.dispatch);
    store.dispatch(actions.addBuildings(buildings));
    let building = _.find(buildings, x=>x.name === 'General Store');
    dispatch(actions.setGameState({currentBuilding: building.id}));

    component = newComponent();
    expect(component.find('.test-building-name').text()).toContain(building.name);
  });

  describe('mapState', () => {
    it('maps a {building} to the state', () => {
      const state = {
        buildings: {
          'One': {name: 'OneBuilding', id:'One'}
        },
        game: {
          currentBuilding: 'One'
        }
      };

      const actualState = mapState(state);
      expect(actualState.building.name).toEqual('OneBuilding');
    })
  });

  it('should show the purse view on state.game.showPurse', () => {
    expect(component.find(Purse).length).toEqual(0);

    dispatch(actions.showPurse());
    component = newComponent();

    expect(component.find(Purse).length).toEqual(1);
  });

  it('should route to /game on esc key');
});