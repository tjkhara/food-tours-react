import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, onRemoveTour}) => {

  
  
  const [readMore, setReadMore] = useState(false)
  
  const readMoreHandler = () => {
    setReadMore((prevState) => {
      return !prevState
    })
  }

  const clickHandler = () => {
    onRemoveTour(id)
  }
  
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0,200)}...`}
          <button type="button" onClick={readMoreHandler}>{!readMore ? "Read more" : "Show less"}</button>
        </p>
        
        <button className="delete-btn" onClick={clickHandler}>Not Interested</button>
      </footer>
    </article>
  )
};

export default Tour;
