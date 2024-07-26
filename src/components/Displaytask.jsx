import React, { useState, useEffect, useRef } from "react";

function Displaytask({ tasks, handleEdit, checked, handleChecked, handleDeleted }) {

  return (
    <div className="w-2/4">
      <div className="flex flex-row items-center justify-between rounded-t bg-slate-900 px-4 py-1 text-white">
        <h1 className="text-xl font-bold">Your Tasks</h1>
        <div className="max-w-1/4 flex items-center justify-around gap-1">
          <button
            className="rounded-xl bg-slate-400 px-4 py-1 text-white"
            onClick={() => {
              handleEdit(checked);
            }}
          >
            Edit
          </button>
          <button
            className="rounded-xl bg-red-700 px-4 py-1 text-white"
            onClick={() => {
              handleDeleted(checked);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <table className="w-full border-2 border-black" align="center">
        <thead className="bg-slate-700 px-4 py-1 text-white">
          <tr>
            <th className="w-3/5 border-2 border-black">Task</th>
            <th className="w-auto border-2 border-black">Date</th>
            <th className="w-1/6 border-2 border-black">Select</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((obj) => (
            <tr
              key={obj.id}
              className={
                "border-2 border-black " +
                (obj.completed ? "bg-green-100" : "bg-red-100")
              }
            >
              <td className="border-2 border-black">{obj.title}</td>
              <td className="border-2 border-black" align="center">
                {new Date().toLocaleDateString()}
              </td>
              <td className="border-2 border-black" align="center">
                <input
                  type="checkbox"
                  checked={obj.id===checked}
                  onChange={() => {
                    handleChecked(obj.id);
                  }}
                  disabled={obj.completed}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Displaytask;
