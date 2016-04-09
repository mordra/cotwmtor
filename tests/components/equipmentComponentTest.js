import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';

import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';
import * as Item from '/core/item.js';
import _ from 'lodash';

import * as actions from '/actions/index.js';
import storeFactory from './testStore.js';
import {Equipment, mapState} from '/client/player/equipmentComponent.js';
import {ContainerView} from '/client/misc/containerComponent.jsx';

describe("<Equipment>", () => {
  const store = storeFactory();
  const dispatch = store.dispatch;

  let component;
  const purse = Item.generateItem(cotw.Items.Purse.Purse);
  dispatch(actions.addItem(purse));
  dispatch(actions.equipItem('purse', purse.id));
  component = shallow(<Equipment {...mapState(store.getState())} />);

  it('should make each equipment slot a container', () => {
    expect(component.find('[dropTargetType]').length).toEqual(15); // 15 equipment slots

  });

  it('should have a css class named after the slot', () => {
    expect(component.find(".equipmentSlot.purse").length).toEqual(1);
  });

  it('should display worn equipment', () => {
    let purse = component.find('.equipmentSlot.purse');
    let item = purse.children().props().items;
    expect(item.length).toEqual(1);
    expect(item[0].base.name).toEqual(cotw.Items.Purse.Purse.name);
  });

  it('should map player equipment to component state {equipment: item}', () => {
    const sword = Item.generateItem(cotw.Items.Weapon.BastardSword);

    dispatch(actions.addItem(sword));
    dispatch(actions.equipItem('freehand', sword.id));
    component = shallow(<Equipment {...mapState(store.getState())} />);

    expect(component.find('[id="freehand"]').node.props.items[0].id).toEqual(sword.id);
    expect(component.find('[id="shield"]').node.props.items[0]).toEqual(null);
  });

  it('should pass the correct dropTargetType to the container', () => {
    expect(component.find('[dropTargetType="Armour"]').length).toEqual(1);
    expect(component.find('[dropTargetType="Shield"]').length).toEqual(1);
    expect(component.find('[dropTargetType="Helmet"]').length).toEqual(1);
    expect(component.find('[dropTargetType="Bracers"]').length).toEqual(1);
    expect(component.find('[dropTargetType="Gauntlet"]').length).toEqual(1);
    expect(component.find('[dropTargetType="Belt"]').length).toEqual(1);
    expect(component.find('[dropTargetType="Purse"]').length).toEqual(1);
    expect(component.find('[dropTargetType="Pack"]').length).toEqual(1);
    expect(component.find('[dropTargetType="Neckwear"]').length).toEqual(1);
    expect(component.find('[dropTargetType="Overgarment"]').length).toEqual(1);
    expect(component.find('[dropTargetType="Ring"]').length).toEqual(2);
    expect(component.find('[dropTargetType="Boots"]').length).toEqual(1);
  });
});