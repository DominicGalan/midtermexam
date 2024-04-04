import React from 'react';

function Galan({ display }) {
  return (
    <div style={{ backgroundColor: 'orange', height: '500px', width: '500px', display: 'flex', fontWeight: 'bold', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Arial, sans-serif'}}>
      <p> {display} <br/> world</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Galan display="hello"/>
    </div>
  );
}
