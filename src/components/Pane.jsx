import React, { useState, useEffect, useCallback } from "react";

function Pane({display, handleDisplay, title, handleSave, handleCompleted}) {
  const [status, setStatus] = useState(display);
  const [taskTitle, setTaskTitle] = useState(title);

  useEffect(() => {
    setStatus(display);
    setTaskTitle(title);
  }, [display,title]);

  const handleCross = useCallback(() => {
    handleDisplay();
  });

  
  return (
    <>
      <dialog open={status} className="rounded-xl border shadow-xl">
        <div className="flex justify-end p-1">
          <button
            onClick={handleCross}
            className="rounded-full bg-black px-3 py-1 font-semibold text-white"
          >
            X
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="py-4 text-xl font-bold">Edit Task</h1>
          <form
            className="flex flex-col items-center justify-center px-4 py-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label>
              <input
                type="text"
                placeholder="Enter Task"
                className="border-1 w-80 rounded-md px-2 py-1"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </label>
            <div className="buttons flex w-36 justify-center py-4 gap-2">
              <button
                type="submit"
                className="rounded-xl bg-black px-4 py-2 text-white"
                onClick={useCallback(() => handleSave(taskTitle))}
              >
                Save
              </button>
              <button
                type="submit"
                className="rounded-xl bg-green-700 px-4 py-2 text-white"
                onClick={useCallback(()=>{handleCompleted()})}
              >
                Completed
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Pane;
