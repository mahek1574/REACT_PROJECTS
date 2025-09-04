import { useState } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
  } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

function Todoitem({ task,onDelete }) {
  const [done, setDone] = useState(false);
  const [iconType, setIconType] = useState("blank");

  const handleIconClick = () => {
    setIconType((prev) => (prev === "blank" ? "checked" : "blank"));
  };

  return (
    <div className="list">
      <br />
      <ul>
        <li>
          {iconType === "checked" ? (
            <RiCheckboxCircleLine onClick={handleIconClick} />
          ) : (
            <RiCheckboxBlankCircleLine onClick={handleIconClick} />
          )}

          <span className={iconType === "checked" ? "done" : ""}>{task}</span>

          <IoCloseSharp
            onClick={onDelete}
            style={{ color: "red", cursor: "pointer" }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Todoitem;
