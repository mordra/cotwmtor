import React, { Component, PropTypes } from 'react';
import Attributes from './components/attributes';
import GameDifficulty from './components/gameDifficulty';
import Gender from './components/gender';
import { connect } from 'react-redux';
import cotw from '../enums/enums';

const CharCreation = ({
  player,
  onCompleted,
  onCancelled
  }) => (
  <div className="ui middle aligned center aligned grid">
    <div className="ui one column">
      <div className="ui stacked vertical segment">
        <div className="ui vertical segment">
          <div className="ui labeled fluid input">
            <div className="ui label">Character Name:</div>
            <input type="text" name="name" placeholder="What word did your mother utter as you came kicking and screaming into this world?" />
          </div>
        </div>
        <Attributes attributes={player.attributes}/>
        <div className="ui vertical segments">
          <div className="ui vertical segment">Character Gender</div>
          <div className="ui vertical segment">
            <Gender gender={player.gender} />
          </div>
        </div>
        <GameDifficulty difficulty={player.difficulty} />
        <div className="ui button primary" onclick={onCompleted}>Ok</div>
        <div className="ui button" onclick={onCancelled}>Cancel</div>
        <div className="ui button">View Icon</div>
        <div className="ui button">Help</div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (_) => {
  return {
    player: {
      name: 'Testing',
      difficulty: cotw.DifficultyLevel.Easy,
      gender: 'male'
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCompleted: () => {console.error('TODO: create the player!')}
  }
};

const CharCreationContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(CharCreation);

export default CharCreationContainer;