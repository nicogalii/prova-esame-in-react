import { useEffect, useState } from "react";
import equipmentApi from "../services/equipment.api";
import type { EquipmentBooking } from "../models/EquipmentBooking.model";

const useEquipmentBookingsApi = () => {
  const [result, setResult] = useState<EquipmentBooking[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    equipmentApi()
      .then((data) => {
        setResult(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { result, loading };
};

export default useEquipmentBookingsApi;
