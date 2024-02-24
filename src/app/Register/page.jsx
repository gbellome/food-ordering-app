'use client'

import { useState } from 'react'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = (ev) => {
    ev.preventDefault()

    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-type': 'application/json' },
    })
  }
  return (
    <section className="py-8">
      <form
        action=""
        className="block max-w-xs mx-auto"
        onSubmit={handleFormSubmit}
      >
        <h1 className="py-8 text-4xl text-center text-primary">Register</h1>
        <input
          type="email"
          name="email"
          id="emailRegister"
          placeholder="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit"> Register</button>
        <div className="my-4 text-center text-gray-500">or</div>
        <button>Login with Google</button>
      </form>
    </section>
  )
}
