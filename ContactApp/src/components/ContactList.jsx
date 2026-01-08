import React from "react";

function ContactList() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 pt-24 px-4">
        <div className="max-w-5xl mx-auto bg-gray-900 border border-blue-900/40 rounded-xl shadow-md p-6">
          
          <h2 className="text-blue-400 text-2xl font-semibold mb-6 text-center">
            Contact List
          </h2>

          <div className="text-center text-gray-400 py-10">
            No contacts added yet.
          </div>

        </div>
      </div>
    </>
  );
}

export default ContactList;
