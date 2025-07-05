import { EQUIPMENT_GYM_API_BASE_URL } from "../constants";

const equipmentBookingsApi = async () => {
  const res = await fetch(`${EQUIPMENT_GYM_API_BASE_URL}/equipment-bookings`);

  const data = await res.json();

  if (!res.ok) throw new Error("Failed to fetch equipment");

  return data;
};

export default equipmentBookingsApi;
