import { useState } from "react";

const LeadForm = ({ onSubmit, initialData, onCancel }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [status, setStatus] = useState(initialData?.status || "New");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, status });
    if (!initialData) {
      setName("");
      setEmail("");
      setStatus("New");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <div className="relative rounded-md shadow-sm">
          <input
            id="name"
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full rounded-md border-gray-300 pr-10 
                     focus:border-blue-500 focus:ring-blue-500 sm:text-sm
                     placeholder:text-gray-400"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-400">*</span>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <div className="relative rounded-md shadow-sm">
          <input
            id="email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full rounded-md border-gray-300 pr-10
                     focus:border-blue-500 focus:ring-blue-500 sm:text-sm
                     placeholder:text-gray-400"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-400">*</span>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm
                   focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          <option value="New">New</option>
          <option value="Engaged">Engaged</option>
          <option value="Proposal Sent">Proposal Sent</option>
          <option value="Closed-Won">Closed-Won</option>
          <option value="Closed-Lost">Closed-Lost</option>
        </select>
      </div>

      <div className="flex items-center space-x-3 pt-3">
        <button
          type="submit"
          className="flex-1 justify-center py-2.5 px-4 border border-transparent 
                   rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 
                   hover:bg-blue-700 focus:outline-none focus:ring-2 
                   focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          {initialData ? "Update Lead" : "Add Lead"}
        </button>
        {initialData && (
          <button
            type="button"
            onClick={onCancel}
            className="py-2.5 px-4 border border-gray-300 rounded-md shadow-sm 
                     text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 
                     focus:ring-blue-500 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default LeadForm;
