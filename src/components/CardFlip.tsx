import React from "react";
import "./CardFlip.css";

interface CardFlipProps {
  type: "hover" | "click";
  backNode: React.ReactNode;
  frontNode: React.ReactNode;
}

const CardFlip: React.FC<CardFlipProps> = ({ type, backNode, frontNode }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flipping-card rounded-xl"
      onMouseEnter={type === "hover" ? () => setIsFlipped(true) : () => {}}
      onMouseLeave={type === "hover" ? () => setIsFlipped(false) : () => {}}
      onClick={type === "click" ? handleFlip : () => {}}
    >
      <div className={`flipping-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flipping-card-front rounded-xl p-6 bg-secondary text-secondary-content shadow-lg">
          {frontNode}
        </div>
        <div className="flipping-card-back rounded-xl p-6 bg-primary text-primary-content shadow-lg">
          {backNode}
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
