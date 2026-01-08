import React from "react";
import user from "../images/user.png";

function ContactCard({ contact }) {
  const { name, email, number } = contact;

  return (
    <div className="flex items-center gap-4 bg-gray-950 border border-gray-800 rounded-lg px-5 py-4 hover:border-blue-800 transition">
      
      <img
        src={user}
        alt="user"
        className="w-12 h-12 rounded-full border border-blue-900/50 object-cover bg-gray-900 p-1"
      />

      <div className="flex-1">
        <p className="text-gray-200 font-medium">
          {name}
        </p>
        <p className="text-gray-400 text-sm">
          {email}
        </p>
        {number && (
          <p className="text-gray-500 text-sm">
            {number}
          </p>
        )}
      </div>

    </div>
  );
}

export default ContactCard;
