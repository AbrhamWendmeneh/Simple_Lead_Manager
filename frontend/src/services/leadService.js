const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;

export const getLeads = async () => {
  const response = await fetch(`${API_URL}/leads`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to fetch leads");
  }
  return response.json();
};

export const getLead = async (id) => {
  const response = await fetch(`${API_URL}/leads/${id}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to fetch lead");
  }
  return response.json();
};

export const createLead = async (leadData) => {
  const response = await fetch(`${API_URL}/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(leadData),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to create lead");
  }
  return response.json();
};

export const updateLead = async (id, leadData) => {
  const response = await fetch(`${API_URL}/leads/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(leadData),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to update lead");
  }
  return response.json();
};

export const deleteLead = async (id) => {
  const response = await fetch(`${API_URL}/leads/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to delete lead");
  }
  return response.json();
};
