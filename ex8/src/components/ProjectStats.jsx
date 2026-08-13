import { useProjects } from "../context/ProjectContext";
import { CheckCircle2, Clock, AlertTriangle, ListTodo } from "lucide-react";

const ProjectStats = () => {
  const { state } = useProjects();

  const currentProjectTasks = state.tasks.filter(
    (t) => t.projectId === state.activeProjectId,
  );

  const total = currentProjectTasks.length;
  const done = currentProjectTasks.filter((t) => t.status === "DONE").length;
  const inProgress = currentProjectTasks.filter(
    (t) => t.status === "IN_PROGRESS",
  ).length;
  const urgent = currentProjectTasks.filter(
    (t) => t.priority === "URGENT",
  ).length;

  const completionRate = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="stats-dashboard">
      <div className="stat-card">
        <div className="stat-icon total">
          <ListTodo size={20} />
        </div>
        <div>
          <h4>إجمالي المهام</h4>
          <p>{total}</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon progress">
          <Clock size={20} />
        </div>
        <div>
          <h4>قيد التنفيذ</h4>
          <p>{inProgress}</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon urgent">
          <AlertTriangle size={20} />
        </div>
        <div>
          <h4>عاجل (Urgent)</h4>
          <p>{urgent}</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon done">
          <CheckCircle2 size={20} />
        </div>
        <div>
          <h4>نسبة الإنجاز</h4>
          <p>{completionRate}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;
