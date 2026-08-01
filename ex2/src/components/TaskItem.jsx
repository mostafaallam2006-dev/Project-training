/* eslint-disable no-unused-vars */
import React from "react";
const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task-item ${task.isCompleted ? "completed" : ""}`}>
      <div>
        <h3>{task.title}</h3>
        <span className="category-badge">{task.category}</span>
      </div>

      <div className="actions">
        <button onClick={() => onToggle(task.id)}>
          {task.isCompleted ? "إلغاء الإنجاز" : "تم الإنجاز"}
        </button>
        <button onClick={() => onDelete(task.id)} className="btn-delete">
          حذف
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
