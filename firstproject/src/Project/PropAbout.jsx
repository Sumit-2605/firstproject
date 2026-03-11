import React from "react";
// import pic from '../assets/pizza.jpg'

const Prop = ({title,img,para}) =>{
    return(
        <>
            <div className="row text-center">
                <div className="col-12">
                  
                     {/* <img src={pic} alt="..."  height={'550px'} width={'100%'}/> */}
                     <img src={img} alt ='...' height="300px" width={"100%"} />
                       <h6 className="text-light mt-2">{title}</h6>
                     <p className="text-bold">{para}</p>
                   
                </div>
            </div>
        </>
    )
}




export default Prop