import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Dashboard() {
  const [user, setUser] = useState<{ name: string; role: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const storedUser = localStorage.getItem('user')

    if (!token || !storedUser) {
      router.push('/')
      return
    }

    try {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
    } catch (err) {
      console.error('Invalid user data in localStorage', err)
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      router.push('/')
    } finally {
      setLoading(false)
    }
  }, [router])

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/')
  }

  if (loading)
    return (
      <div className='min-h-screen flex items-center justify-center'>
        Loading...
      </div>
    )

  if (!user)
    return (
      <div className='min-h-screen flex items-center justify-center'>
        Redirecting to login...
      </div>
    )

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='max-w-4xl mx-auto bg-white rounded shadow p-6'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-xl font-semibold'>
            Welcome, {user.name} ({user.role})
          </h2>
          <button
            onClick={logout}
            className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition'
          >
            Logout
          </button>
        </div>

        <p className='text-gray-700'>
          This is a protected dashboard. You can enhance UI/UX or add
          role-specific content here.
        </p>

        {user.role === 'Admin' ? (
          <div className='mt-6 p-4 border rounded bg-gray-50'>
            <h3 className='font-semibold mb-2'>Admin Panel</h3>
            <p>Admin-specific actions go here.</p>
          </div>
        ) : (
          <div className='mt-6 p-4 border rounded bg-gray-50'>
            <h3 className='font-semibold mb-2'>User Panel</h3>
            <p>User-specific content goes here.</p>
          </div>
        )}
      </div>
    </div>
  )
}
