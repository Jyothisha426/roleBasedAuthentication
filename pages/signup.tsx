import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Signup(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [role,setRole]=useState('User');
  const [err,setErr]=useState('');
  const router = useRouter();

  async function submit(e:any){
    e.preventDefault();
    try{
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, { name, email, password, role });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/dashboard');
    }catch(err:any){
      setErr(err?.response?.data?.message || 'Signup failed');
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full bg-white p-8 rounded shadow'>
        <h1 className='text-2xl mb-4'>Sign up</h1>
        {err && <div className='text-red-600 mb-2'>{err}</div>}
        <form onSubmit={submit} className='space-y-3'>
          <input className='w-full p-2 border rounded' placeholder='Full name' value={name} onChange={e=>setName(e.target.value)} />
          <input className='w-full p-2 border rounded' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
          <input className='w-full p-2 border rounded' placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)} />
          <select value={role} onChange={e=>setRole(e.target.value)} className='w-full p-2 border rounded'>
            <option>User</option>
            <option>Admin</option>
          </select>
          <button className='w-full p-2 bg-green-600 text-white rounded'>Create account</button>
        </form>
        <p className='mt-4 text-sm'>
  Already have an account? <Link href='/' className='text-blue-600'>Login</Link>
</p>
      </div>
    </div>
  )
}
