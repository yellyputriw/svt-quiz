import React from "react";
import { useRouter } from "next/router";

const End = () => {
  const router = useRouter();

  return (
    <div className="container">
      <div id="end" className="flex-center flex-column">
        <h1 id="finalScore"></h1>
        <form>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
          <button
            type="submit"
            className="btn"
            id="saveScoreBtn"
            // onClick="saveHighScore(event)"
            disabled>
            Save
          </button>
        </form>
        <a className="btn" href="/game.html">
          Play Again
        </a>

        <button className="btn" onClick={() => router.push("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default End;
