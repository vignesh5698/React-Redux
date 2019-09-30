import React, { useState }  from 'react';

const Home2 = ({name, c, ...rest}) => {
  console.log(rest);
  const [clicked, clickedTimes] = useState(0);
  return (
    <div>
      {`${name} and ${c}`}
      <div>{clicked}</div>
      <button
       onClick={() =>{clickedTimes(clicked+1)}}
      >Hook Button
      </button>
      
    </div>
  );
}

export default Home2;