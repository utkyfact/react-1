

function Button(props) {

    console.log(props);
    
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={props.onClick}>{props.title}</button>
  )
}

export default Button;

