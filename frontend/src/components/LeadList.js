const LeadList = ({ leads, onEdit, onDelete }) => {
  if (!leads.length) {
    return (
      <div className="p-12 text-center bg-white rounded-lg border border-gray-100">
        <p className="text-gray-500 font-medium">
          No leads found. Add your first lead above!
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-4 text-left text-sm font-medium text-gray-500"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-sm font-medium text-gray-500"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-sm font-medium text-gray-500"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-sm font-medium text-gray-500"
            >
              Created
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-right text-sm font-medium text-gray-500"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {leads.map((lead) => (
            <tr key={lead._id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {lead.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {lead.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    lead.status === "New"
                      ? "bg-blue-100 text-blue-800"
                      : lead.status === "Engaged"
                      ? "bg-yellow-100 text-yellow-800"
                      : lead.status === "Proposal Sent"
                      ? "bg-purple-100 text-purple-800"
                      : lead.status === "Closed-Won"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {lead.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(lead.createdAt).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                <button
                  onClick={() => onEdit(lead)}
                  className="inline-flex items-center px-3 py-1.5 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md font-medium mr-2 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(lead._id)}
                  className="inline-flex items-center px-3 py-1.5 border border-red-600 text-red-600 hover:bg-red-50 rounded-md font-medium transition-colors"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadList;
