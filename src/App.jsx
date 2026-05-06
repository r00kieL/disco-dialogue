import { useState } from "react";
import { dialogue } from "./dialogues";

export default function App() {
  const [dialogueId, setDialogueId] = useState(1);
  const [currentTextId, setCurrentTextId] = useState(0);

  return (
    <>
      {/* 对话框 */}
      <div>
        <span>
          <b>{dialogue[dialogueId].speaker}</b>
        </span>
        <span> - </span>
        {dialogue[dialogueId].textList
          .slice(0, currentTextId + 1)
          .map(({ text, key }) => (
            <p key={key}>{text}</p>
          ))}
      </div>

      {/* 下一步的分支按钮 */}
      <div>
        {currentTextId + 1 === dialogue[dialogueId].textList.length ? (
          dialogue[dialogueId].options.map(({ label, key, nextId }) => (
            <button
              key={key}
              onClick={() => {
                setDialogueId(nextId);
                setCurrentTextId(0);
              }}
            >
              {label}
            </button>
          ))
        ) : (
          <button onClick={() => setCurrentTextId(currentTextId + 1)}>
            继续
          </button>
        )}
      </div>
    </>
  );
}
