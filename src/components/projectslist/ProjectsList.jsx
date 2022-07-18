import "./projectslist.scss";

const ProjectsList = ({ title, id, active, setSelected }) => {
  return (
    <li
      className={active ? "projectsList active" : "projectsList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default ProjectsList;
