import React from 'react';

import Name from './Name';
import SubTitle from './SubTitle';

const style = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const Title = () => (
  <div style={style} className="fade-in">
    <Name />
    <SubTitle />
  </div>
);

export default Title;
