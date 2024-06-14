'use client'

import React, {useState} from 'react'

import axios from 'axios';

const page = () => {
  // Ab data mujhe dikhana hai toh useState use krna padega
  const [Images, setImages] = useState([])

  // useEffect - function automatically call hojata hai bina button dabaye jese yaha hua
  // useEffect(() => {
  //   getImages()
  // }, [])
  


  const getImages = async () => {
    try {
    const response = await axios.get('https://picsum.photos/v2/list');
    // console.log(response);
    // console.log(response.data);
    const data = response.data;
    // console.log(data);
    // Ab mera data ke andar array of objects mil rhe h jisme har ek object mein download_url ke andar images ka url mil rha hai
    setImages(data);
    // console.log(Images);

    } catch (error) {
    console.error("Error Fetching Images");
    }
  }
  return (
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-green-600 text-white font-bold'>Get Images</button>
      <div className='p-10'>
        {Images.map((elem, i)=>{
          // return <h1 key={i}>{elem.author}</h1>
          return <img 
          key={i} 
          src={elem.download_url} 
          width={300}
          height={300}
          className='m-10 rounded inline-block'
          />
        })}
      </div>
    </div>
  )
}

export default page
