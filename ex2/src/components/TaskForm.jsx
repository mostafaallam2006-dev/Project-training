import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("شخصي");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask(title, category);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="اكتب المهمة الجديدة هنا..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="شخصي">شخصي</option>
        <option value="شغل">شغل</option>
        <option value="مذاكرة">مذاكرة</option>
      </select>
      <button type="submit">إضافة مهمة</button>
    </form>
  );
};

export default TaskForm;
