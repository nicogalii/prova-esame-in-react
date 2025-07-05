import { useState } from "react";
import equipmentBookingDurationApi from "../services/equipmentBookingDuration.api";

const useEquipmentBookingDurationApi = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const hendleBookingDuration = async (id: number, duration: number) => {
    setLoading(true);

    try {
      await equipmentBookingDurationApi(id, duration);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { hendleBookingDuration, loading };
};

export default useEquipmentBookingDurationApi;
