import React from "react";
import { useState } from "react";
import { useRef } from "react";

function Addtask({ handleSubmit, nextIndex, handleClear }) {

  function handleSubmission(e) {
    e.preventDefault();
    if (e.target.addTask.value) {
      handleSubmit({
        title: e.target.addTask.value,
        completed: false,
        id: nextIndex,
      });
      e.target.addTask.value = "";
    }
  }

  return (
    <div className="container my-5 flex w-2/4 flex-col items-center justify-center rounded-xl border-2 border-slate-700">
      <h1 className="py-4 text-xl font-bold">Add Task</h1>
      <form
        className="flex flex-col items-center justify-center px-4 py-2"
        onSubmit={handleSubmission}>
        <label>
          <input
            name="addTask"
            type="text"
            placeholder="Enter Task"
            className="border-1 max-w-80 rounded-md px-2 py-1"
          />
        </label>
        <div className="buttons flex w-36 justify-between py-4">
          <button
            type="submit"
            className="rounded-xl bg-green-700 px-4 py-2 text-white">
            Add
          </button>
          <button
            type="reset"
            className="rounded-xl bg-red-700 px-4 py-2 text-white"
            onClick={() => {
              handleClear();
            }}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addtask;
