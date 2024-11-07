import { useState } from "react";
import "./CheckedItems.css";

function CheckedItems() {
  const [leftCheckedItems, setLeftCheckedItems] = useState([
    false,
    true,
    true,
    false,
  ]);
  const [rightCheckedItems, setRightCheckedItems] = useState([
    true,
    true,
    false,
  ]);

  const checkItem = (checkedItems, setCheckedItems, index) => {
    checkedItems[index] = !checkedItems[index];
    const newCheckedItems = [...checkedItems];
    setCheckedItems(newCheckedItems);
  };

  const move = (
    checkedItems,
    otherCheckedItems,
    setCheckedItems,
    setOtherCheckedItems
  ) => {
    const newCheckedItems = checkedItems.filter((item) => item);
    const remainingItems = checkedItems.filter((item) => !item);
    const allCheckedItems = otherCheckedItems.concat(newCheckedItems);
    setCheckedItems(remainingItems);
    setOtherCheckedItems(allCheckedItems);
  };

  return (
    <>
      <div className="checked-items">
        <ul>
          {leftCheckedItems.map((item, index) => (
            <li>
              <input
                type="checkbox"
                checked={leftCheckedItems[index]}
                onChange={() =>
                  checkItem(leftCheckedItems, setLeftCheckedItems, index)
                }
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="actions">
        <button
          onClick={() =>
            move(
              rightCheckedItems,
              leftCheckedItems,
              setRightCheckedItems,
              setLeftCheckedItems
            )
          }
        >
          &lt;
        </button>
        <button
          onClick={() =>
            move(
              leftCheckedItems,
              rightCheckedItems,
              setLeftCheckedItems,
              setRightCheckedItems
            )
          }
        >
          &gt;
        </button>
      </div>
      <div className="checked-items">
        <ul>
          {rightCheckedItems.map((item, index) => (
            <li>
              <input
                type="checkbox"
                checked={rightCheckedItems[index]}
                onChange={() =>
                  checkItem(rightCheckedItems, setRightCheckedItems, index)
                }
              />
            </li>
          ))}{" "}
        </ul>
      </div>
    </>
  );
}

export default CheckedItems;
