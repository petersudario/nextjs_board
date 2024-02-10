import "../../app/globals.css";

function generateList(final=10) {
  const list = [];
  for(let i = 0; i <= final; i++){
    list.push(<span key={i}>{i}</span>)
  }
  return list
}

export default function Lista(){
  return (
    <div>
      <h1>Lista de Números</h1>
      <div className='grid'>
        {generateList()}
      </div>
    </div>
  )
}