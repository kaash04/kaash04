import React from 'react';

const Kash = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '100%',
        textAlign: 'center'
      }}>
        <pre style={{
          fontFamily: 'monospace',
          fontSize: '0.5vw',
          scale: '2',
          whiteSpace: 'pre-wrap',
          textAlign: 'center',
          margin: 0
        }}>
          {` ___  __            ________          ________           ___  ___          ________          ___   ___     
|\\  \\|\\  \\         |\\   __  \\        |\\   ____\\         |\\  \\|\\  \\        |\\   __  \\        |\\  \\ |\\  \\    
\\ \\  \\/  /|_       \\ \\  \\|\\  \\       \\ \\  \\___|_        \\ \\  \\\\\\  \\       \\ \\  \\|\\  \\       \\ \\  \\\\_\\  \\   
 \\ \\   ___  \\       \\ \\   __  \\       \\ \\_____  \\        \\ \\   __  \\       \\ \\  \\\\\\  \\       \\ \\______  \\  
 \\ \\  \\\\ \\  \\       \\ \\  \\ \\  \\       \\|____|\\  \\        \\ \\  \\ \\  \\       \\ \\  \\\\\\  \\       \\|_____|\  \\ 
   \\ \\__\\\\ \\__\\       \\ \\__\\ \\__\\        ____\\_\\  \\        \\ \\__\\ \\__\\       \\ \\_______\\             \\ \\__\\
    \\|__| \\|__|        \\|__|\\|__|       |\\_________\\        \\|__|\\|__|        \\|_______|              \\|__|
                                         \\|_________|                                                       
`}
        </pre>
      </div>
    </div>
  );
};

export default Kash;
