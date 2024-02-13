import React from 'react'

function Intro({startTest, style}) {

    const info = [
        {
          id: 1,
          description: "The test consists of 10 questions.",
        },
        {
          id: 2,
          description: "Once you press the button your time will start.",
        },
        {
          id: 3,
          description:
            "Each question remains on the screen for a maximum of 30 seconds.",
        },
        {
          id: 4,
          description: "Answer options will not appear for the first 10 seconds.",
        },
        {
          id: 5,
          description:
            "After clicking one of the options or completing 30 seconds, you will move on to the new question.",
        },
        {
          id: 6,
          description: "It will not be possible to return to past questions.",
        },
      ];

  return (
    <div className="introduction" style={style}>
        <ul className="info">
          {info.map((item, index) => (
            <li key={item.id}>{item.description}</li>
          ))}
        </ul>
        <p>GOOD LUCK!</p>
        <button id="start" onClick={startTest}>START</button>
      </div>
  )
}

export default Intro