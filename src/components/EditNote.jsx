import { useState } from "react";

export function EditNote({ title, body, onBack, onUpdate }) {
  const [titleDraft, setTitleDraft] = useState(title);
  const [bodyDraft, setBodyDraft] = useState(body);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate({ title: titleDraft, body: bodyDraft });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titleDraft}
          onChange={(e) => setTitleDraft(e.target.value)}
        />
        <textarea
          value={bodyDraft}
          onChange={(e) => setBodyDraft(e.target.value)}
        ></textarea>
        <button type="submit">Update</button>
      </form>
      <button onClick={onBack} type="button">
        Back
      </button>
    </div>
  );
}
