export interface EquipmentBooking {
  id: number;
  equipment_id: number;
  user_id: string;
  start_date: string; // ISO 8601 format
  end_date: string; // ISO 8601 format
}
