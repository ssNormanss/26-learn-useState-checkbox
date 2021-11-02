import "./styles.css";
import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS, JS"
  },
  {
    id: 2,
    name: "ReactJS"
  },
  {
    id: 3,
    name: "VueJS"
  },
  {
    id: 4,
    name: "Angular"
  }
];

export default function App() {
  const [checked, SetChecked] = useState([]);
  const handleSubmit = () => {
    //Call API
    console.log({ ids: checked });
  };
  // console.log(checked)
  const handleCheck = (id) => {
    SetChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        // làm gì đó
        return checked.filter((item) => item !== id);
      } else return [...prev, id];
    });
  };

  return (
    <div className="App" style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
