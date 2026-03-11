import React from "react";
import Genres from "./Genres";


const Home = () => {
  return (
    <div className="container my-4 rounded">
      <h4 className="text-light py-4 mb-3">Top Genres</h4>

      <div className="row g-3">
        {Genres.map((item) => (
          <div className="col-12 col-md-3" key={item.id}>
            <div
              className="p-3 rounded d-flex gap-3"
              style={{
                background: "#1f2933",
                color: "#fff"
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                width="60"
                height="60"
                className="rounded"
              />

              <div>
                <h6 >{item.title}</h6>
                  Tracks {item.tracks}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Home;

// import React from 'react'
// import Genres from './Genres.jsx'

// const Home = () => {
//   return (
//    <>
//    <div className='container py-4'>
//     <h4 className='fw-bold text-light'>Top Genres</h4>
//     <div className='row '>
//       {Genres.map((i)=>{
//         <div className="col-12 col-md-3"> key={i.id}
//         <div className='d-flex'
//           style={{background:'#0000',
//             color:"#ffffff"
//           }}

// >
//   <img 
//   src={i.img}
//   alt="...."
//   width={'60px'}
//   height={'60px'}
//   />
//   <div>
//     <h6>{i.title}</h6>
//     Tracks{i.traces}
//   </div>
//         </div>


//         </div>

//       })}

//     </div>
//    </div>
   
//    </>
//   )
// }

// export default Home

