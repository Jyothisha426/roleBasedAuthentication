import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [err,setErr] = useState('');
  const router = useRouter();

  async function submit(e:any){
    e.preventDefault();
    try{
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/dashboard');
    }catch(err:any){
      setErr(err?.response?.data?.message || 'Login failed');
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full bg-white p-8 rounded shadow'>
        <h1 className='text-2xl mb-4'>Login</h1>
        {err && <div className='text-red-600 mb-2'>{err}</div>}
        <form onSubmit={submit} className='space-y-3'>
          <input className='w-full p-2 border rounded' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
          <input className='w-full p-2 border rounded' placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)} />
          <button className='w-full p-2 bg-blue-600 text-white rounded'>Login</button>
        </form>
        <p className='mt-4 text-sm'>
  Don&apos;t have an account? <Link href='/signup' className='text-blue-600'>Sign up</Link>
</p>
      </div>
    </div>
  )
}
