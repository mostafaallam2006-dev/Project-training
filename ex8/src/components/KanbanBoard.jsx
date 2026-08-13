import { useProjects } from "../context/ProjectContext";
import TaskCard from "./TaskCard";

const COLUMNS = [
  { id: "TODO", title: "To Do 📝" },
  { id: "IN_PROGRESS", title: "In Progress ⚡" },
  { id: "REVIEW", title: "Under Review 🔍" },
  { id: "DONE", title: "Completed ✅" },
];

const KanbanBoard = ({ searchQuery, priorityFilter, onSelectTask }) => {
  const { state, dispatch } = useProjects();

  // فلترة التاسكات الخاصة بالمشروع النشط
  const currentProjectTasks = state.tasks.filter(
    (t) => t.projectId === state.activeProjectId,
  );

  // تطبيق البحث والأولويات (تفعيل المهارات المتقدمة في الفلترة)
  const filteredTasks = currentProjectTasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPriority =
      priorityFilter === "ALL" || task.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

  const handleStatusChange = (taskId, newStatus) => {
    dispatch({
      type: "UPDATE_TASK_STATUS",
      payload: { taskId, newStatus },
    });
  };

  const handleDeleteTask = (taskId) => {
    if (confirm("هل أنت تأكد من حذف هذه المهمة؟")) {
      dispatch({ type: "DELETE_TASK", payload: taskId });
    }
  };

  return (
    <div className="kanban-board">
      {COLUMNS.map((col) => {
        const columnTasks = filteredTasks.filter((t) => t.status === col.id);

        return (
          <div key={col.id} className="kanban-column">
            <div className="column-header">
              <h3>{col.title}</h3>
              <span className="count-tag">{columnTasks.length}</span>
            </div>

            <div className="column-content">
              {columnTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onSelectTask={onSelectTask}
                  onDeleteTask={handleDeleteTask}
                  onStatusChange={handleStatusChange}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;
