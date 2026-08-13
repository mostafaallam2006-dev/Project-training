import { createContext, useContext, useReducer, useEffect } from "react";

const ProjectContext = createContext();

// البيانات الأولية (Initial Seed Data)
const initialData = {
  projects: [
    {
      id: "proj-1",
      name: "PhysiMaster Web App",
      description: "منصة الفيزياء التفاعلية للطلاب",
    },
    {
      id: "proj-2",
      name: "Crypto Dashboard",
      description: "متابع أسعار العملات المباشر",
    },
  ],
  activeProjectId: "proj-1",
  tasks: [
    {
      id: "task-1",
      projectId: "proj-1",
      title: "إعداد قاعدة البيانات والـ Routing",
      description: "ربط Express مع MongoDB وإعداد المسارات الأساسية",
      status: "DONE", // 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'DONE'
      priority: "HIGH", // 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'
      assignee: "مصطفى علام",
      subtasks: [
        { id: "sub-1", title: "إعداد ملف .env", completed: true },
        { id: "sub-2", title: "إنشاء Schema المستخدم", completed: true },
      ],
    },
    {
      id: "task-2",
      projectId: "proj-1",
      title: "بناء واجهة الـ Kanban Board",
      description: "استخدام React Context لإدارة حركة التاسكات بين الأعمدة",
      status: "IN_PROGRESS",
      priority: "URGENT",
      assignee: "فتحي",
      subtasks: [
        { id: "sub-3", title: "تصميم الكروت", completed: true },
        { id: "sub-4", title: "ربط المودال للتفاصيل", completed: false },
      ],
    },
  ],
};

// Reducer لإدارة كافة تغييرات الـ State
const projectReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_PROJECT":
      return { ...state, activeProjectId: action.payload };

    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
        activeProjectId: action.payload.id,
      };

    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "UPDATE_TASK_STATUS":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, status: action.payload.newStatus }
            : task,
        ),
      };

    case "UPDATE_TASK_PRIORITY":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, priority: action.payload.newPriority }
            : task,
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "TOGGLE_SUBTASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload.taskId) return task;
          return {
            ...task,
            subtasks: task.subtasks.map((sub) =>
              sub.id === action.payload.subtaskId
                ? { ...sub, completed: !sub.completed }
                : sub,
            ),
          };
        }),
      };

    case "ADD_SUBTASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, subtasks: [...task.subtasks, action.payload.subtask] }
            : task,
        ),
      };

    case "IMPORT_DATA":
      return action.payload;

    default:
      return state;
  }
};

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialData, () => {
    const localData = localStorage.getItem("devpulse_data");
    return localData ? JSON.parse(localData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem("devpulse_data", JSON.stringify(state));
  }, [state]);

  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);
