import React from "react";
import { useState } from "react";
import _ from "lodash";
import { number } from "prop-types";

const Hangman = () => {
  const arr = [
    "australia",
    "india",
    "argentina",
    "africa",
    "afghanistan",
    "bangladesh",
    "bhutan",
    "brazil",
    "egypt",
    "iran",
    "iraq",
    "malawi",
  ];
  const [d, setD] = useState(0);
  const [temp, setTemp] = useState([]);
  const [enteredValue, setEnteredValue] = useState("");
  const [count, setCount] = useState(1);
  const [Flag, setFlag] = useState(true);

  const start = () => {
    setEnteredValue("");
    let t = arr[Math.floor(Math.random() * arr.length)];
    setTemp(t);
    setFlag(false);
  };

  const next = () => {
    setEnteredValue("");
    let clear_arr = document.getElementsByClassName("inputBlock");
    for (let i = 0; i < clear_arr.length; i++) {
      clear_arr[i].value = "";
    }
    let t = arr[Math.floor(Math.random() * arr.length)];
    setTemp(t);
    setD(0);
    setCount(1);
    setFlag(false);
  };

  const getValue = (e) => {
    e.target.disabled = true;
    var c = 0;
    let valued = e.target.value.toLowerCase();
    setEnteredValue(valued);
    var flag = temp.includes(valued);
    if (flag === false) {
      setCount(count + 1);
    }
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === valued) {
        c += 1;
      }
      setD(d + c);
    }
  };

  return (
    <div className="container">
      <h2
        className="Country_Name"
      >
        Country Name
      </h2>
      <div className="leftContainer">
        {count > 1 ? (
          <img src={`${count}.png`} alt="" />
        ) : (
          <img src="1.png" alt="" />
        )}
      </div>
      <div className="rightContainer">
        <div className="inputContainer">
          <div>
            {_.times(temp.length, (i) => (
              <>
                {temp[i] === enteredValue ? (
                  <>
                    <input
                      className="inputBlock"
                      type="text"
                      // placeholder={temp[i]}
                      value={enteredValue}
                      style={{
                        width: "20px",
                        height: "20px",
                        fontWeight: "bolder",
                      }}
                    />
                  </>
                ) : (
                  <>
                    <input
                      className="inputBlock"
                      type="text"
                      // placeholder={temp[i]}
                      style={{ width: "20px", height: "20px" }}
                    />
                  </>
                )}
              </>
            ))}
          </div>
        </div>
        {d === temp.length && d !== 0 ? (
          <>
            <button
              onClick={next}
              style={{ marginTop: "20px" }}
              className="nextGame"
            >
              NEXT GAME
            </button>
            <h1>congratulations</h1>
          </>
        ) : (
          <>
            {Flag === true ? (
              <button onClick={start} className="startGameBtn">
                START GAME
              </button>
            ) : null}
            {count === 8 ? (
              <div>
                <h1 style={{ color: "red" }}>You Loose the game</h1>
                <h3>
                  answer was... <span>{temp}</span>
                </h3>
                <button onClick={next} className="TryAgainbtn">
                  Try Again
                </button>
              </div>
            ) : (
              <div className="btnsContainer">
                <div>
                  <button className="Clickbtn" value="A" onClick={getValue}>
                    A
                  </button>
                  <button className="Clickbtn" value="B" onClick={getValue}>
                    B
                  </button>
                  <button className="Clickbtn" value="C" onClick={getValue}>
                    C
                  </button>
                  <button className="Clickbtn" value="D" onClick={getValue}>
                    D
                  </button>
                  <button className="Clickbtn" value="E" onClick={getValue}>
                    E
                  </button>
                  <button className="Clickbtn" value="F" onClick={getValue}>
                    F
                  </button>
                  <button className="Clickbtn" value="G" onClick={getValue}>
                    G
                  </button>
                </div>
                <div>
                  <button className="Clickbtn" value="H" onClick={getValue}>
                    H
                  </button>
                  <button className="Clickbtn" value="I" onClick={getValue}>
                    I
                  </button>
                  <button className="Clickbtn" value="J" onClick={getValue}>
                    J
                  </button>
                  <button className="Clickbtn" value="K" onClick={getValue}>
                    K
                  </button>
                  <button className="Clickbtn" value="L" onClick={getValue}>
                    L
                  </button>
                  <button className="Clickbtn" value="M" onClick={getValue}>
                    M
                  </button>
                  <button className="Clickbtn" value="N" onClick={getValue}>
                    N
                  </button>
                </div>
                <div>
                  <button className="Clickbtn" value="O" onClick={getValue}>
                    O
                  </button>
                  <button className="Clickbtn" value="P" onClick={getValue}>
                    P
                  </button>
                  <button className="Clickbtn" value="Q" onClick={getValue}>
                    Q
                  </button>
                  <button className="Clickbtn" value="R" onClick={getValue}>
                    R
                  </button>
                  <button className="Clickbtn" value="S" onClick={getValue}>
                    S
                  </button>
                  <button className="Clickbtn" value="T" onClick={getValue}>
                    T
                  </button>
                  <button className="Clickbtn" value="U" onClick={getValue}>
                    U
                  </button>
                </div>
                <div>
                  <button className="Clickbtn" value="V" onClick={getValue}>
                    V
                  </button>
                  <button className="Clickbtn" value="W" onClick={getValue}>
                    W
                  </button>
                  <button className="Clickbtn" value="X" onClick={getValue}>
                    X
                  </button>
                  <button className="Clickbtn" value="Y" onClick={getValue}>
                    Y
                  </button>
                  <button className="Clickbtn" value="Z" onClick={getValue}>
                    Z
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Hangman;
