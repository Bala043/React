import React from 'react'
import ItemList from './ItemList'
const RestuarantCategory = ({data,showItems,setShowIndex}) => {
  function handleClick(){
    setShowIndex();
  }
  return (<div className="accordion">
    {/* Accordion Header */}
    <div className="accordion-header" onClick={()=>handleClick()} >
      <h3 data-testid="accordion-title"className="accordion-title">
        {data.title} ({data.itemCards.length})
      </h3>
      <span className="accordion-icon">▼</span>
    </div>
    {/* Accordion Body */}
    <div className="accordion-body">
      {showItems&&<ItemList items={data.itemCards}></ItemList>}
    </div>
  </div>
  
  )
}
export default RestuarantCategory