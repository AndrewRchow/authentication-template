import React from 'react';

import { withFirebase } from '../Firebase/Index';

const SignOut = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOut);