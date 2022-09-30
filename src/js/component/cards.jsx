import React from 'react'

export const Cards = (props) => {
  return (

    <div className="card mb-3"  >
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            
        </div>
        <div className='text-center py-3 border-top '>

                <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>

  )
}
