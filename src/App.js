import React from 'react';
import { Route } from 'react-router-dom';

import MenuScreen from './screens/MenuScreen';
import InboxScreen from './screens/InboxScreen';
import SnoozedScreen from './screens/SnoozedScreen';
import ArchivedScreen from './screens/ArchivedScreen';

const App = () => (
  <div id="container" className="menuOpen">
    {/* <MenuScreen /> */}
    <div id="content-container">
      <Route exact path='/' component={InboxScreen} />
      {/* <Route exact path='/snoozed' component={SnoozedScreen} /> */}
      {/* <Route exact path='/archived' component={ArchivedScreen} /> */}
    </div>
  </div>
);

export default App;
