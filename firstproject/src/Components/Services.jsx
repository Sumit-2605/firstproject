// import React from 'react';

// const Services = ({ img, title, phase }) => {
//   return (
//     <>
//     // <div className="box text-center">
//       <p className="text-light small">{phase}</p>
//       <img src={img} height="200px" className="img-fluid" />
//       <h6 className="text-light mt-2">{title}</h6>
//     // </div>
//     </>
//   );
// };

// export default Services;



// import React from 'react';

// const Services = ({ img, title }) => {
//   return (
//     <>
//     {/* <div className="box text-center"> */}
 
//       <img src={img} height="200px" className="img-fluid" />
//       <h6 className="text-light mt-2">{title}</h6>
//      {/* </div> */}
//     </>
//   );
// };

// export default Services;

import React, { useRef } from 'react'

const Services = () => {
 const countRef = useRef(0);
    const numcount = () =>{
        countRef.current +=1;



        console.log("Count:", countRef.current);
    }
  
     const decrement = () =>{
        countRef.current -=1;
           console.log("Count:", countRef.current);
     }

  return (
    <>
   <div className="m-4">
                <button onClick={numcount} className="btn btn-success m-2"> + </button>


                <button onClick={decrement} className="btn btn-danger m-2"> - </button>
           </div>
    </>
  )
}

export default Services


 {/* <div className='m4'>
      <button onClick={()=>{setCount(count+1)}} className='btn btn-success' >+</button>
        <button className='btn btn-light' >{count}</button>
          <button onClick={()=>{setCount(count-1)}} className='btn btn-danger' >-</button>
    </div> */}
    