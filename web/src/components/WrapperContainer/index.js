import * as React from 'react';
import Header from '../Header';

const WrapContainer = ( { children, dontShowFooter }) => {
  return(
    <div style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flexStart',
    }}>
      <div style={{
        width: '100vw',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        zIndex: 5,
      }}>
        <Header />
        {children}
      </div>
    </div>
  )
};

export default WrapContainer;