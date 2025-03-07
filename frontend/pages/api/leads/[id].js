export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";
  console.log("backend", backendUrl);
  const leadEndpoint = `${backendUrl}/leads/${id}`;

  try {
    if (method === "GET") {
      const response = await fetch(leadEndpoint);
      const data = await response.json();

      if (response.status === 404) {
        return res.status(404).json({ message: "Lead not found" });
      }

      return res.status(200).json(data);
    } else if (method === "PUT") {
      const response = await fetch(leadEndpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();

      if (response.status === 404) {
        return res.status(404).json({ message: "Lead not found" });
      }

      return res.status(200).json(data);
    } else if (method === "DELETE") {
      const response = await fetch(leadEndpoint, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.status === 404) {
        return res.status(404).json({ message: "Lead not found" });
      }

      return res.status(200).json(data);
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
