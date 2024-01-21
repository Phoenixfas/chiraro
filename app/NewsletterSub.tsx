'use client'
import { useState } from 'react'

export default function NewsletterSub() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(`Subscribing with email: ${email}`);
    };
  
    return (
      <div className='w-full flex justify-center px-5'>
        <div className="max-w-sm p-6 border-2 border-[#01BAEF] rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300"> Email Address </label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-[#01BAEF]" />
                </div>
                <div className="flex items-center">
                    <button type="submit" className="border-2 border-[#01BAEF] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#01BAEF] focus:outline-none focus:shadow-outline-blue active:bg-[#01BAEF] duration-300" > Subscribe </button>
                </div>
            </form>
        </div>
      </div>
  )
}
