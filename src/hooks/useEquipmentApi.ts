import { useEffect, useState } from "react";
import equipmentApi from "../services/equipment.api";
import type { Equipment } from "../models/Equipment.model";

const useEquipmentApi = () => {
  const [result, setResult] = useState<Equipment[]>([]);
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

export default useEquipmentApi;
