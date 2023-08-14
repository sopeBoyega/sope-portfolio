export default function Experience(props) {
  return (
    <div className="experience">
      <h2>
        {props.role}
        <span>{props.company}</span>
      </h2>
      <h3>{props.timeline}</h3>
      <p>{props.description}</p>
    </div>
  );
}
