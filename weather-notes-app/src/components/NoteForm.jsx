import { useState } from "react";

const NoteForm = ({ onAddNote, cityName }) => {
  const [text, setText] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation بسيطة
    if (!text.trim()) {
      setValidationError("برجاء كتابة نص الملاحظة أولاً!");
      return;
    }

    if (text.trim().length < 3) {
      setValidationError("الملاحظة يجب أن تكون 3 أحرف على الأقل!");
      return;
    }

    onAddNote(text);
    setText("");
    setValidationError(""); // تفريغ الخطأ بعد الإضافة
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <h3>إضافة ملاحظة لمدينة {cityName}:</h3>
      <input
        type="text"
        placeholder="اكتب ملاحظتك هنا..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (validationError) setValidationError("");
        }}
      />
      {validationError && <p className="validation-msg">{validationError}</p>}
      <button type="submit">إضافة الملاحظة 📝</button>
    </form>
  );
};

export default NoteForm;
