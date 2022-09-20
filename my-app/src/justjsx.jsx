export default function (props) {
  return (
    <header>
      <h1>My First React App</h1>
      {props.value.map((item,idx)=><span key={idx}>{item} </span> )}
    </header>
  );
}
