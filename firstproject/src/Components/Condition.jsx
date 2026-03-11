import React from 'react'
// import { parse } from 'vite'

    
  
  //   let userName = 'sumit'
  //   let password = 'Sumit123'
  //   let style ={}

  //   if(userName === 'su2mit'  && password=== 'Sumit123')
  //   {
  //     print='Welcome to the Website '
  //      style.color = 'green';
  //   }
  // else
  // {
  //   print='Enter correct Information'
  //    style.color = 'red';
  // }
// let print = { };
//   let n = parseInt(prompt('Enter any Number'));
//   let style ={}
//   if(n%4===0)
//   {
//     print=`Number is divisble by 4`;
//     style.color = 'green';
//   }
//   else if(n%6===0){
//   print=`Number is divisble by 6`;
//    style.color = 'green';
//   }
//   else{
// print=`Number is not divisble by either of two`;
//     style.color = 'red';
//   }

// let marks = parseInt(prompt('Enter you percentage'));
// let style ={}; 
// let print = '';
// if(marks <40)
// {
//   print = 'Fail!!!! Better Luck next time ';
//   style.color = 'red';
// } 
// else if(marks>=40 && marks<50)
// {
//  print ='You obtained Third division';
//   style.color = 'blue';
// }
// else if(marks>=50 && marks<60)
// {
//   print ='You obtained Saecond division';
//   style.color = '';
// }
// else{
//   print = 'Congratulation!!!! You got first division ';
//   style.color = 'green';
// }

let Nationility ='Indian'
let style ={}
if(Nationility ='Indian')
{
  let age = parseInt(prompt('Enter your age'))
  
if(age>=18){
 print = 'You are Eligible for Voting'
 style.color ='green'
}
else{
   print = 'You are not Eligible for Voting'
    style.color ='red'
}
}
 

const Condition = () => {
  return (
    <>
      <p style={style}>{print}</p>
    
    </>
  )
}

export default Condition
