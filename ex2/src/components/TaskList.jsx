import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  if (tasks.length === 0) {
    return <p className="empty-msg">لا توجد مهام حالياً ☕</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TaskList;
