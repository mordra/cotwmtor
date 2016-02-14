import ASCIITiles from '/client/enums/cotwContent';
import React from 'react';
import PlayerView from './playerComponent.jsx';

function CalculatePathRotation(map, coord, match) {
  let left = map[coord.x - 1][coord.y]['tile'].name;
  let right = map[coord.x + 1][coord.y]['tile'].name;
  let top = map[coord.x][coord.y - 1]['tile'].name;
  let bottom = map[coord.x][coord.y + 1]['tile'].name;

  let rotation =
    left == match ?
      top == match ?
        270 : // left top
        0   // left bottom
      :
      top == match ?
        180 :  // right top
        90;   // right bottom

  return rotation;
}

const MapView = ({map, player}) => {
  return (<div style={{position:'relative'}}> {
    _.map(map, function (mapRow) {
      return (_.map(mapRow, function (cell) {
        let style = {
          left: `${cell.coords.x * 32}px`,
          top : `${cell.coords.y * 32}px`
        };
        let className;
        if (cell.building && cell.buildingTopLeft) {
          if (cell.building.type.isTile) {
            className = 'tile ' + cell.building.type.name.toLowerCase();
          } else {
            className = 'building ' + cell.building.type.name;
          }
        } else if (cell.tile) {
          className = 'tile ' + cell.tile.name.toLowerCase();
          let rotations = {'PathGrass':'Path','WallDarkDgn': 'Rock'};
          _.forEach(rotations, function(value, key) {
            if (cell.tile.name == key) {
              style['transform'] = `rotate(-${CalculatePathRotation(map, cell.coords, value)}deg)`;
            }
          });
        }

        let cellView = (<i className={className}
                           key={`cell.${cell.coords.x}.${cell.coords.y}`}
                           style={style}/>);
        return cellView;
      }))
    })
  }
    <PlayerView player={player}/>
    </div>)
  };

    export default MapView;