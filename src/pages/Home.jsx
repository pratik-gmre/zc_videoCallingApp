import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [value, setvalue] = useState();
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);
  return (
    <div>
      <form onSubmit={handleJoinRoom}>
        <label htmlFor="room">Room</label>
        <input
          type="text"
          placeholder="Enter room code"
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
          }}
        />
        <br />
        <br />
        <button>Join</button>
      </form>
    </div>
  );
};

  