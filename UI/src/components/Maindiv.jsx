import React, { useState } from 'react'
import pic from '../assets/comp.avif'

const Maindiv = () => {
  const [certid,setCertid]=useState('');
  const navigate=useNavigate();
  const searchcertificate=()={
    navigate=(`/certificate/${cid}`)
  }


  return (
   <>
   <h2 class="text-center text-2xl font-bold mb-4">Certificate Dapp</h2>
    <div class="text-center mb-4">
        <img src={pic} class="w-72 mx-auto"/>
    </div> 
    <div class="text-center mb-4">
        <input type="text" placeholder="Enter Certificate ID to view" class="p-2 border rounded"/>
    </div>
    <div class="text-center">
       <a href='/download' ><button class="bg-blue-500 text-white px-4 py-2 rounded" onClick={searchcertificate}>Search</button></a>
    </div>
   
   </>
  )
}

export default Maindiv