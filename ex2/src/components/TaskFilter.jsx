const TaskFilter = ({
  searchQuery,
  onSearchChange,
  filterStatus,

  onFilterChange,
}) => {
  return (
    <div className="task-filter">
      <input
        type="text"
        placeholder="ابحث عن مهمة..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="filter-buttons">
        <button
          className={filterStatus === "all" ? "active" : ""}
          onClick={() => onFilterChange("all")}
        >
          الكل
        </button>
        <button
          className={filterStatus === "active" ? "active" : ""}
          onClick={() => onFilterChange("active")}
        >
          قيد التنفيذ
        </button>
        <button
          className={filterStatus === "completed" ? "active" : ""}
          onClick={() => onFilterChange("completed")}
        >
          المكتملة
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;
