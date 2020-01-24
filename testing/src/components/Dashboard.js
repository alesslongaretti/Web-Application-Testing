import React, { useState } from "react";
import Display from "./Display";

const Dashboard = () => {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);


  if (strikes > 2) {
    setStrikes(0);
  }

  if (balls > 3) {
    setBalls(0);
  }

  return (
    <div className="container">
      <section>
        <div>
          <Display balls={balls} strikes={strikes} />
        </div>
      </section>
      <section className="buttons">
        <div>
          <button onClick={() => setBalls(balls + 1)} className="balls_button">
            Balls
          </button>
        </div>
        <div>
          {" "}
          <button
            onClick={() => setStrikes(strikes + 1)}
            className="strikes_button"
          >
            Strikes
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setBalls(0);
              setStrikes(0);
            }}
            className="hits_button"
          >
            hits
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              if (strikes < 2) {
                setStrikes(strikes + 1);
              }
            }}
            className="foul_button"
          >
            Foul
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
