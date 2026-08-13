import { useProjects } from "../context/ProjectContext";
import { Layout, Plus, FolderKanban } from "lucide-react";

const Sidebar = () => {
  const { state, dispatch } = useProjects();

  const handleCreateProject = () => {
    const name = prompt("أدخل اسم المشروع الجديد:");
    if (!name) return;
    const newProj = {
      id: `proj-${Date.now()}`,
      name,
      description: "مشروع جديد تم إنشاؤه حديثاً",
    };
    dispatch({ type: "ADD_PROJECT", payload: newProj });
  };

  return (
    <aside className="sidebar">
      <div className="logo-area">
        <FolderKanban size={28} className="logo-icon" />
        <h2>DevPulse</h2>
      </div>

      <div className="projects-section">
        <div className="section-header">
          <span>المشاريع</span>
          <button onClick={handleCreateProject} title="إضافة مشروع">
            <Plus size={18} />
          </button>
        </div>

        <ul className="project-list">
          {state.projects.map((proj) => (
            <li
              key={proj.id}
              className={state.activeProjectId === proj.id ? "active" : ""}
              onClick={() =>
                dispatch({ type: "SET_ACTIVE_PROJECT", payload: proj.id })
              }
            >
              <Layout size={18} />
              <span>{proj.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
