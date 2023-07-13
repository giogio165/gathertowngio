import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import "./GatherTown.css";
import characterImage from "../src/Image/character.png";

const GatherTown = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (key === "ArrowUp") {
        setPosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y - 10,
        }));
      } else if (key === "ArrowDown") {
        setPosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y + 10,
        }));
      } else if (key === "ArrowLeft") {
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: prevPosition.x - 10,
        }));
      } else if (key === "ArrowRight") {
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: prevPosition.x + 10,
        }));
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "location");

    const updatePosition = async () => {
      try {
        await set(dbRef, position);
      } catch (error) {
        console.error("Error updating position:", error);
      }
    };

    updatePosition();

    // real-time updates
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const newPosition = snapshot.val();
      setPosition(newPosition);
    });

    return () => {
      unsubscribe();
    };
  }, [position]);

  return (
    <div className="background">
      <div className="character" style={{ top: position.y, left: position.x }}>
        <img src={characterImage} alt="Character" />
      </div>
    </div>
  );
};

export default GatherTown;
