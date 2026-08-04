const NotesList = ({ notes, onDeleteNote }) => {
  if (notes.length === 0) {
    return <p className="empty-notes">لا توجد ملاحظات مسجلة لهذه المدينة 📝</p>;
  }

  return (
    <div className="notes-list">
      <h3>الملاحظات المسجلة:</h3>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.text}</span>
            <button
              onClick={() => onDeleteNote(note.id)}
              className="delete-btn"
            >
              حذف 🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
