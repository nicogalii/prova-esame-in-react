export interface Equipment {
  id: number;
  name: string;
  claim: string;
  icon: string; // L'icona è rappresentata come una stringa SVG
  image: string; // URL
  pricePerMinute: number;
}
