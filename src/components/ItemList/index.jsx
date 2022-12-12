//LISTA DE REPOSITORIO
import './style.css';

const ItemList = ({title, description}) => {
  return (
    <div className='item-list'>
        <strong>{ title }</strong>
        <p>{ description }</p>
        <hr />

    </div>
  )
}

export default ItemList;