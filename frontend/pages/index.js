import { useState, useEffect } from "react";
import LeadForm from "../src/components/LeadForm";
import LeadList from "../src/components/LeadList";
import LoadingSpinner from "../src/components/LoadingSpinner";
import * as leadService from "../src/services/leadService";

export default function Home() {
  const [leads, setLeads] = useState([]);
  const [editingLead, setEditingLead] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const data = await leadService.getLeads();
      setLeads(data);
      setError("");
    } catch (err) {
      setError("Error fetching leads: " + err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (leadData) => {
    setIsLoading(true);
    setError("");

    try {
      if (editingLead) {
        const updatedLead = await leadService.updateLead(
          editingLead._id,
          leadData
        );
        setLeads(
          leads.map((lead) =>
            lead._id === editingLead._id ? updatedLead : lead
          )
        );
        setEditingLead(null);
      } else {
        const newLead = await leadService.createLead(leadData);
        setLeads([...leads, newLead]);
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (lead) => {
    setEditingLead(lead);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this lead?")) {
      return;
    }

    setIsLoading(true);
    try {
      await leadService.deleteLead(id);
      setLeads(leads.filter((lead) => lead._id !== id));
    } catch (err) {
      setError("Error deleting lead: " + err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setEditingLead(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold text-gray-900">
                Lead Management
              </h1>
            </div>
            {isLoading && <LoadingSpinner size="small" />}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-4">
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
              <div className="px-4 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  {editingLead ? "Edit Lead" : "Add New Lead"}
                </h2>
              </div>
              <div className="px-4 py-5">
                <LeadForm
                  onSubmit={handleSubmit}
                  initialData={editingLead}
                  onCancel={handleCancel}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
              <div className="px-4 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">
                  Leads List
                </h2>
                <span className="text-sm text-gray-500 font-medium">
                  {leads.length} leads
                </span>
              </div>
              <div>
                {isLoading && !leads.length ? (
                  <div className="p-8 flex justify-center">
                    <LoadingSpinner size="medium" />
                  </div>
                ) : (
                  <LeadList
                    leads={leads}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Lead Management System
          </p>
        </div>
      </footer>
    </div>
  );
}
 