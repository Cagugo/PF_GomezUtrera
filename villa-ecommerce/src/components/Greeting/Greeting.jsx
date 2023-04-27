/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';


function Saludo() {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();
  const styles = {
    fontSize: 35,
  
  }

  if (hours < 12) {
    timeOfDay = 'Días';
    styles.color = "#D90000";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'Tardes';
    styles.color = "#04733F";
  } else {
    timeOfDay = 'Noches';
    styles.color = "#04756F";
  }

  return (
    <h2 style={styles}> Buen@s {timeOfDay}! Gracias por visitarnos </h2>
  )
}

ReactDOM.render(<Saludo />, document.getElementById('root'));
export default Saludo;