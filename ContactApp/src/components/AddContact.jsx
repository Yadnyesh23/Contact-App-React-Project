import React from "react";
import {useState} from 'react'

function AddContact({onAddContact}) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  const addContact = (e) => {
    e.preventDefault()

    if(!name || !email || !number){
      alert("All fields are required!");
      return;
    }
    
    onAddContact({
      id: Date.now(),
      name,
      email,
      number
    })
    
    setName("");
    setEmail("");
    setNumber("");

  }
  
  return (
    <>
      <div className="min-h-screen bg-gray-950 pt-24 px-4">
        <div className="max-w-xl mx-auto bg-gray-900 border border-blue-900/40 rounded-xl shadow-md p-6">
          
          <h2 className="text-blue-400 text-2xl font-semibold mb-6 text-center">
            Add Contact
          </h2>

          <form className="space-y-5" onSubmit={addContact}>
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-300 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="bg-gray-950 border border-gray-700 text-gray-200 rounded-lg px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-300 text-sm font-medium">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                className="bg-gray-950 border border-gray-700 text-gray-200 rounded-lg px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-300 text-sm font-medium">
                Number
              </label>
              <input
                type="number"
                name="number"
                placeholder="Enter number"
                className="bg-gray-950 border border-gray-700 text-gray-200 rounded-lg px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition"
            >
              Add Contact
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddContact;
