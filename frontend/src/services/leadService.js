const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;

const fetchConfig = {
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Something went wrong");
  }
  return response.json();
};

export const getLeads = async () => {
  try {
    const response = await fetch(`${API_URL}/leads`, {
      ...fetchConfig,
      method: "GET",
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error fetching leads:", error);
    throw error;
  }
};

export const getLead = async (id) => {
  try {
    const response = await fetch(`${API_URL}/leads/${id}`, {
      ...fetchConfig,
      method: "GET",
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error fetching lead:", error);
    throw error;
  }
};

export const createLead = async (leadData) => {
  try {
    const response = await fetch(`${API_URL}/leads`, {
      ...fetchConfig,
      method: "POST",
      body: JSON.stringify(leadData),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error creating lead:", error);
    throw error;
  }
};

export const updateLead = async (id, leadData) => {
  try {
    const response = await fetch(`${API_URL}/leads/${id}`, {
      ...fetchConfig,
      method: "PUT",
      body: JSON.stringify(leadData),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error updating lead:", error);
    throw error;
  }
};

export const deleteLead = async (id) => {
  try {
    const response = await fetch(`${API_URL}/leads/${id}`, {
      ...fetchConfig,
      method: "DELETE",
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error deleting lead:", error);
    throw error;
  }
};
