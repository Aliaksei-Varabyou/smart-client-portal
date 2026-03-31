'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: '/dashboard'
    })
  }

  return (
    <div className="space-y-4">
      <input 
        className="border p-2"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        className="border p-2"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="border px-4 py-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );

}