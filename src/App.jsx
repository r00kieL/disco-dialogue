import { useState } from "react";

import { dialogue } from "./dialogues";
import "./App.css";

export default function App() {
  const [dialogueId, setDialogueId] = useState(1);
  const [currentTextId, setCurrentTextId] = useState(0);

  return (
    <>
      <div className="flex">
        {/* 游戏内容，暂无 */}
        <div className="flex-6"></div>

        <div className="flex-4 flex flex-col">
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
        </div>
      </div>
    </>
  );
}
