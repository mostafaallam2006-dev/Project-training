const Stats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const activeTasks = totalTasks - completedTasks;

  return (
    <div className="stats-container">
      <div className="stat-card">
        <span>إجمالي المهام</span>
        <h3>{totalTasks}</h3>
      </div>
      <div className="stat-card">
        <span>قيد التنفيذ</span>
        <h3>{activeTasks}</h3>
      </div>
      <div className="stat-card">
        <span>المكتملة</span>
        <h3>{completedTasks}</h3>
      </div>
    </div>
  );
};

export default Stats;
