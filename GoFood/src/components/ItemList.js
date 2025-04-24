import React from 'react'
import { CDN_URL } from '../utils/constants'
import {useDispatch} from "react-redux"
import { addItem } from '../utils/cartSlice'   
const ItemList = ({items}) => {
  const dispatch=useDispatch();

  const handleAddItem=(item)=>{
    //Dispatch an action
    dispatch(addItem(item))//redux create an object behind the dispatch {payload:"pizza"}
  }
    return(
        <div>
            {items.map((item) => { 
              return(<div data-testid="item-info" key={item.card.info.id} className="accordion-item">
                {/* Left Side: Name, Price, Description */}
                <div className="item-info">
                  <h4 className="item-name">{item.card.info.name}</h4>
                  <p className="item-price">₹{item.card.info.price/100||item.card.info.defaultPrice/100}</p>
                  <p className="item-description">{item.card.info.description}</p>
                </div>
                {/* Right Side: Image + Add Button */}
                <div className="item-image-container">
                  <img
                    className="item-image"
                    src={CDN_URL+item.card.info.imageId}
                  />
                  <button className="add-button" onClick={()=>handleAddItem(item)}>Add +</button>
                </div>
              </div>)
          }
        )
          }
        </div>
    )
}
export default ItemList