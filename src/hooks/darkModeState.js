import {atom} from 'recoil'
import React from 'react'

const darkModeState = atom({
    key: 'darkModeState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });

export default darkModeState