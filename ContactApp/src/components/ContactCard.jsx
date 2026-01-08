import React from "react";
import user from "../images/user.png";
import { Trash2 } from "lucide-react";

function ContactCard({ contact , onDelete }) {
  const {id, name, email, number } = contact;

  
  return (
    <div className="flex items-center gap-4 bg-gray-950 border border-gray-800 rounded-lg px-5 py-4 hover:border-blue-800 transition">
      <img
        src={user}
        alt="user"
        className="w-12 h-12 rounded-full border border-blue-900/50 object-cover bg-gray-900 p-1"
      />

      <div className="flex-1">
        <p className="text-gray-200 font-medium">{name}</p>
        <p className="text-gray-400 text-sm">{email}</p>
        {number && <p className="text-gray-500 text-sm">{number}</p>}
      </div>

      <button
      onClick={() => onDelete(id)}
        className="p-2 rounded-full border border-red-900/40 text-red-500 
                   hover:bg-red-950 hover:text-red-400 
                   transition active:scale-95"
        aria-label="Delete contact"
        title="Delete"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}

export default ContactCard;
