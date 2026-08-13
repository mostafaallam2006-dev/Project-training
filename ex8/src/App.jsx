import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { ProjectProvider, useProjects } from "./context/ProjectContext";
import Sidebar from "./components/Sidebar";
import KanbanBoard from "./components/KanbanBoard";
import ProjectStats from "./components/ProjectStats";
import TaskModal from "./components/TaskModal";
import { Search, Plus } from "lucide-react";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

const DashboardContent = () => {
  const { state, dispatch } = useProjects();
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("ALL");
  const [selectedTask, setSelectedTask] = useState(null);

  const activeProject = state.projects.find(
    (p) => p.id === state.activeProjectId,
  );

  // تحديث بيانات الـ SelectedTask إذا حدث تغيير من الـ State
  const currentSelectedTask = state.tasks.find(
    (t) => t.id === selectedTask?.id,
  );

  const handleAddNewTask = () => {
    const title = prompt("عنوان المهمة الجديدة:");
    if (!title) return;

    const newTask = {
      id: `task-${Date.now()}`,
      projectId: state.activeProjectId,
      title,
      description: "مهمة جديدة تمت إضافتها",
      status: "TODO",
      priority: "MEDIUM",
      assignee: "مصطفى علام",
      subtasks: [],
    };

    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <header className="top-header">
          <div className="project-title-area">
            <h1>{activeProject?.name || "اختر مشروعاً"}</h1>
            <p>{activeProject?.description}</p>
          </div>

          <button className="add-task-btn" onClick={handleAddNewTask}>
            <Plus size={18} />
            إضافة مهمة
          </button>
        </header>

        {/* كروت الإحصائيات الفورية */}
        <ProjectStats />

        <div className="filter-bar">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="بحث في المهمات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>الأولوية:</label>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="ALL">الكل</option>
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
              <option value="URGENT">Urgent</option>
            </select>
          </div>
        </div>

        <KanbanBoard
          searchQuery={searchQuery}
          priorityFilter={priorityFilter}
          onSelectTask={(task) => setSelectedTask(task)}
        />

        {/* المودال الشامل عند الضغط على كارت المهمة */}
        {currentSelectedTask && (
          <TaskModal
            task={currentSelectedTask}
            onClose={() => setSelectedTask(null)}
          />
        )}
      </main>
    </div>
  );
};

const App = () => (
  <ProjectProvider>
    <DashboardContent />
  </ProjectProvider>
);

export default App;
