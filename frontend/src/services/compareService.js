// compareService.js
export const compareDelivery = async (pickup, drop, orderValue) => {
  try {
    const response = await fetch("http://localhost:5001/api/compare", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pickup, drop, orderValue }),
    });

    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching comparison:", error);
    return null;
  }
};
