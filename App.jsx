import QRCode from 'qrcode'
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './index.css'
import { error } from 'console'

function App() {
  const [url,setUrl]=useState('')
  const [qrcode,setQrcode]=useState('')
  const
  GenerateQRCode=()=>{
QRCode.toDataURL(url,(err,url)=>{
  if (err)return console.error(err)

  console.log(url)
  setQrcode(url)
})
  }
  return (
    
      <div className='app'>
       <h1>QR Code Generator</h1> 
       <input
       type="text"
       placeholder='e.g. https://google.com'
       />
       <button>Generate</button>
       <img src={qrcode}/>

      </div>
      
  )
}

export default App
