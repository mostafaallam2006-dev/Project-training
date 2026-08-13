import { CheckSquare, Trash2 } from "lucide-react";

const priorityColors = {
  LOW: "badge-low",
  MEDIUM: "badge-medium",
  HIGH: "badge-high",
  URGENT: "badge-urgent",
};

const TaskCard = ({ task, onSelectTask, onDeleteTask, onStatusChange }) => {
  const completedSubtasks = task.subtasks.filter((s) => s.completed).length;

  return (
    <div className="task-card">
      <div className="card-header">
        <span className={`priority-badge ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDeleteTask(task.id);
          }}
        >
          <Trash2 size={14} />
        </button>
      </div>

      <h4 onClick={() => onSelectTask(task)}>{task.title}</h4>
      <p className="task-desc">{task.description}</p>

      {task.subtasks.length > 0 && (
        <div className="subtask-progress">
          <CheckSquare size={14} />
          <span>
            {completedSubtasks}/{task.subtasks.length} subtasks
          </span>
        </div>
      )}

      <div className="card-footer">
        <span className="assignee-avatar">
          {task.assignee ? task.assignee.charAt(0) : "?"}
        </span>

        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          className="status-selector"
        >
          <option value="TODO">To Do</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="REVIEW">Review</option>
          <option value="DONE">Done</option>
        </select>
      </div>
    </div>
  );
};

export default TaskCard;
