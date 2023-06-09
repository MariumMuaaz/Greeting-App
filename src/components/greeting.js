import React from 'react';
import  './components/style.css'; 
function greeting() {   
    let curDate = new Date(2023, 5, 5, 13);
    curDate = curDate.getHours(); 
    let greeting = " " ;  
    const cssStyle = { };
  
    if (curDate >=1 && curDate <12){  
      greeting = 'Good Morning';    
      cssStyle.color = 'green';
    }else if (curDate >= 12 && curDate < 19)  { 
      greeting = 'Good Afternoon';  
      cssStyle.color = 'blue';
    }else { 
      greeting = 'Good Night';  
      cssStyle.color = 'black';
    }
  return (
    <div>
      <h1>Hello Sir, <span style={cssStyle}> {greeting} </span> </h1>
    </div>
  )
}

export default greeting;
