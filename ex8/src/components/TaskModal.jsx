import { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { X, CheckSquare, Plus, Trash2, User, Flag, Layout } from "lucide-react";

const TaskModal = ({ task, onClose }) => {
  const { dispatch } = useProjects();
  const [newSubtaskTitle, setNewSubtaskTitle] = useState("");

  if (!task) return null;

  const handleToggleSubtask = (subtaskId) => {
    dispatch({
      type: "TOGGLE_SUBTASK",
      payload: { taskId: task.id, subtaskId },
    });
  };

  const handleAddSubtask = (e) => {
    e.preventDefault();
    if (!newSubtaskTitle.trim()) return;

    const newSubtask = {
      id: `sub-${Date.now()}`,
      title: newSubtaskTitle.trim(),
      completed: false,
    };

    dispatch({
      type: "ADD_SUBTASK",
      payload: { taskId: task.id, subtask: newSubtask },
    });

    setNewSubtaskTitle("");
  };

  const handleStatusChange = (newStatus) => {
    dispatch({
      type: "UPDATE_TASK_STATUS",
      payload: { taskId: task.id, newStatus },
    });
  };

  const handlePriorityChange = (newPriority) => {
    dispatch({
      type: "UPDATE_TASK_PRIORITY",
      payload: { taskId: task.id, newPriority },
    });
  };

  const completedCount = task.subtasks.filter((s) => s.completed).length;
  const progressPercent = task.subtasks.length
    ? Math.round((completedCount / task.subtasks.length) * 100)
    : 0;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <div className="modal-title">
            <Layout size={20} className="text-blue" />
            <h3>{task.title}</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </header>

        <div className="modal-body">
          <div className="main-details">
            <div className="detail-group">
              <label>الوصف</label>
              <p className="description-text">{task.description}</p>
            </div>

            {/* Subtasks Section */}
            <div className="subtasks-section">
              <div className="subtask-header">
                <label>
                  <CheckSquare size={16} /> المهام الفرعية ({completedCount}/
                  {task.subtasks.length})
                </label>
                <span className="progress-text">{progressPercent}%</span>
              </div>

              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>

              <ul className="subtasks-list">
                {task.subtasks.map((sub) => (
                  <li key={sub.id} className="subtask-item">
                    <input
                      type="checkbox"
                      checked={sub.completed}
                      onChange={() => handleToggleSubtask(sub.id)}
                    />
                    <span className={sub.completed ? "completed" : ""}>
                      {sub.title}
                    </span>
                  </li>
                ))}
              </ul>

              <form onSubmit={handleAddSubtask} className="add-subtask-form">
                <input
                  type="text"
                  placeholder="إضافة مهمة فرعية جديدة..."
                  value={newSubtaskTitle}
                  onChange={(e) => setNewSubtaskTitle(e.target.value)}
                />
                <button type="submit">
                  <Plus size={16} /> إضافة
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar Properties */}
          <div className="sidebar-details">
            <div className="prop-box">
              <span className="prop-label">
                <Flag size={14} /> الحالة:
              </span>
              <select
                value={task.status}
                onChange={(e) => handleStatusChange(e.target.value)}
              >
                <option value="TODO">To Do 📝</option>
                <option value="IN_PROGRESS">In Progress ⚡</option>
                <option value="REVIEW">Under Review 🔍</option>
                <option value="DONE">Completed ✅</option>
              </select>
            </div>

            <div className="prop-box">
              <span className="prop-label">
                <Flag size={14} /> الأولوية:
              </span>
              <select
                value={task.priority}
                onChange={(e) => handlePriorityChange(e.target.value)}
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="URGENT">Urgent 🚨</option>
              </select>
            </div>

            <div className="prop-box">
              <span className="prop-label">
                <User size={14} /> المسؤول:
              </span>
              <span className="assignee-tag">
                {task.assignee || "غير محدد"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
