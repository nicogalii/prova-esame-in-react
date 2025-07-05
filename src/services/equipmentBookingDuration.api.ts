import { EQUIPMENT_GYM_API_BASE_URL } from "../constants";

const equipmentBookingDurationApi = async (id: number, duration: number) => {
  const res = await fetch(
    `${EQUIPMENT_GYM_API_BASE_URL}/equipment/${id}/book`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
      },
      body: JSON.stringify({ duration }),
    }
  );

  const data = await res.text();

  if (!res.ok) throw new Error("Failed to fetch equipment");

  return data;
};

export default equipmentBookingDurationApi;
