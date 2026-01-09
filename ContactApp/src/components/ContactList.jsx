import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import ContactCard from "./ContactCard";

function ContactList({ contacts, onDeleteContact }) {
  const renderContactList = contacts.map((contact) => (
    <ContactCard
      key={contact.id}
      contact={contact}
      onDelete={onDeleteContact}
    />
  ));

  return (
    <div className="min-h-screen bg-gray-950 pt-24 px-4 relative">
      <div className="max-w-5xl mx-auto bg-gray-900 border border-blue-900/40 rounded-xl shadow-md p-6">
        <h2 className="text-blue-400 text-2xl font-semibold mb-6 text-center">
          Contact List
        </h2>

        {contacts.length === 0 ? (
          <p className="text-center text-gray-400 py-10">
            No contacts added yet.
          </p>
        ) : (
          <div className="space-y-4">{renderContactList}</div>
        )}
      </div>

      {/* Floating Add Contact Button */}
      <Link to="/add">
        <button
          className="
            fixed bottom-6 right-6
            flex items-center gap-2
            bg-blue-600 hover:bg-blue-500
            text-white font-medium
            px-5 py-3 rounded-full
            shadow-lg shadow-blue-900/40
            transition-all duration-200
            hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-blue-400
          "
        >
          <Plus size={20} />
          Add Contact
        </button>
      </Link>
    </div>
  );
}

export default ContactList;
