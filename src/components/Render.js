import React, { useState } from 'react';

function Render(props) {
  return (
    <div className="container bg-dark mb-2">
     <div className="row">
       {props.data.map(item=>(
         <div className="col-sm-6 mt-4 mb-4">
           <div className="card">
             <div className="card-body">
               <h6 key={item.id}>FirstName:{item.FirstName}</h6>
               <h6 key={item.id}>LastName:{item.LastName}</h6>
               <h6 key={item.id}>ID: {item.ID}</h6>
               <h6 key={item.id}>Address:{item.Address}</h6>
               <h6 key={item.id}>PhoneNumber:{item.PhoneNumber}</h6>
               <h6 key={item.id}>Temp:{item.Temp}</h6>
               <h6 key={item.id}>Yes:{item.Yes}</h6>
               <h6 key={item.id}>No:{item.No}</h6>
            
             </div>
           </div>
         </div>
       ))}
     </div>
    </div>
  );
}
export default Render;
