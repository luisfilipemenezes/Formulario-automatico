import { ChangeEvent, HtmlHTMLAttributes, useEffect, useState } from 'react'
import './App.css'
import emailjs from '@emailjs/browser'

function App() {
  const [ nome , setNome] = useState('')
  const [email , setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleName(e:ChangeEvent<HTMLInputElement>) {
    setNome(e.target.value);
  }

  function handleEmail (e:ChangeEvent<HTMLInputElement>){
    setEmail(e.target.value)
  }

  function handleMessage(e:ChangeEvent<HTMLInputElement>){
    setMessage(e.target.value)
  }

  function handleClick(){
    console.log('ola');
    
    if(nome == '' || email ==''){
      console.log('nao deu certo');
      
    }
    else{

      const parametros = {
        from_name : nome,
        message :message,
        email: email,
      }

      emailjs.send('service_9nosle2','template_bp71i4r', parametros , 'w3U7OdcWW025zSGUZ').then((response)=>{
        console.log('ENVIADO', response.status)
        setNome("")
        setEmail("")
        setMessage("")
        
      },(err)=>{
        console.log('ERRO',err);
        
      })
    }

  }

  return (
    <div className=' text-2xl h-screen w-screen bg-gray-700 flex items-center justify-center text-white'>
      <div className='h-5/6 w-1/2'>
        <div className='h-full w-full  flex items-center justify-center'>
        <form className='h-full w-full text-center flex flex-col justify-center' >
            <h1 className='m-4 text-5xl'>Contato</h1>
            <p className='m-4' >Digite seu nome</p>
            <input 
              onChange={handleName} 
              type="text" name="" 
              className='text-black m-4 text-center h-12 ' 
              placeholder='Digite seu nome' />

            <p className='m-4'>Digite seu email</p>
            <input 
              type="email" 
              name="" 
              onChange={handleEmail} 
              className='text-black m-4 text-center h-12 ' 
              placeholder='Digite seu email' />
            <p className='m-4'>Digite sua mensagem</p>
            <input 
              onChange={handleMessage}
              type="textarea"
              name="" 
              className='text-black m-4 text-center h-12 ' />

            <button className='rounded-full  m-4' onClick={handleClick} >CONFIRMAR</button>
            
          </form>
          </div> 
          <div></div>   
      </div>
     </div>
  )
}

export default App
