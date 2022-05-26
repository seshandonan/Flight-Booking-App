import React from 'react'
import one from './images/one.jpg'
function Items({data}){
    return (
        <div className="row ">
        {
          data.map((value)=>{
           const {id, images, title, description} = value;
           return (
            <div className="col-sm-3 my-3" key={id}>
             <div className="card bg-light text-center">
                 <img src={one} className="img-fluid" style={{height:"200px"}}/>
                 <h3>{title}</h3>
                 <p>{description}</p>
            </div>
         </div>
           )
          })
        }

</div>
    )
}

export default Items;