import React, {Fragment} from 'react';
import {Redirect, Route} from 'react-router-dom';
import NewGame from './components/newGame';
import Game from './components/game';
import Store from './store';

function Routes({store}) {
  function storeNotInitialized() {
    return store.get('name') === '' || store.get('class') === '';
  }

  return (
    <Fragment>
      <Route path="/" exact component={NewGame} />
      <Route
        path="/game/"
        render={() =>
          storeNotInitialized() ? <Redirect to="/" /> : <Route path="/game/" component={Game} />
        }
      />
    </Fragment>
  );
}

export default Store.withStore(Routes);
