import { useParams } from "react-router-dom";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";

function ContactDetails({ contacts }) {
  const { id } = useParams();

 const contact = contacts.find((c) => c.id.toString() === id);

  if (!contact) {
    return (
      <p className="text-center text-red-500 mt-10">
        Contact not found
      </p>
    );
  }

  const { name, email, number } = contact;

  return (
    <div className="min-h-screen bg-gray-950 pt-24 px-4">
      <div className="max-w-lg mx-auto bg-gray-900 border border-gray-800 rounded-xl p-6">

        <h2 className="text-2xl text-blue-400 font-semibold mb-6 text-center">
          Contact Details
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src={user}
            alt="user"
            className="w-28 h-28 rounded-full border border-blue-900/50 p-2"
          />
        </div>

        <div className="space-y-4 text-gray-300">
          <div>
            <label className="text-gray-400 text-sm">Name</label>
            <p className="text-lg">{name}</p>
          </div>

          <div>
            <label className="text-gray-400 text-sm">Email</label>
            <p className="text-lg">{email}</p>
          </div>

          <div>
            <label className="text-gray-400 text-sm">Phone</label>
            <p className="text-lg">{number}</p>
          </div>
        </div>

      </div>
      <Link to="/">
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
            <ArrowBigLeft size={20} />
            Back to Contact List
          </button>
        </Link>
    </div>
  );
}

export default ContactDetails;
