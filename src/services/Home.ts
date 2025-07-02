import { EQUIPMENT_GYM_API_BASE_URL } from "../constants";


const equipmentListApi = async () => {
  const res = await fetch(`${EQUIPMENT_GYM_API_BASE_URL}/equipment`);

  const data = await res.json();
  // const data: listType[] = await res.json;


  if (!res.ok) throw new Error("");

  return data;
};

export default equipmentListApi;
