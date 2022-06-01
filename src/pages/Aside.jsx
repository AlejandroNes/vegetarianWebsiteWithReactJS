import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
const Aside = () => {
  return (
    <aside>
        <h2>MI CARRITO</h2>
        <div className='productos'>
            <div className='producto'>
                <h5>Laptop</h5>
                <p>Cantidad: <span>2</span></p>
                <p>Total: <span>1200$</span></p>
                <hr />
                <div>
                    <button className='btn-delete'>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                    <button className='btn-love'>
                        <FontAwesomeIcon icon={faHeartCircleCheck} />
                    </button>
                </div>
            </div>
            <div className='producto'>
                <h5>Laptop</h5>
                <p>Cantidad: <span>2</span></p>
                <p>Total: <span>1200$</span></p>
                <hr />
                <div>
                    <button className='btn-delete'>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                    <button className='btn-love'>
                        <FontAwesomeIcon icon={faHeartCircleCheck} />
                    </button>
                </div>
            </div>
            <div className='producto'>
                <h5>Laptop</h5>
                <p>Cantidad: <span>2</span></p>
                <p>Total: <span>1200$</span></p>
                <hr />
                <div>
                    <button className='btn-delete'>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                    <button className='btn-love'>
                        <FontAwesomeIcon icon={faHeartCircleCheck} />
                    </button>
                </div>
            </div>
            
        </div>
    </aside>
  )
}

export default Aside