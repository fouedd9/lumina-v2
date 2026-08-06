export type PackQuantity = 1 | 2 | 10;
export interface Pack {
  quantity: PackQuantity;
  name: string;
  label: string;
  price: number;
  description: string;
  featured?: boolean;
}
export interface OrderDetails {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  quantity: PackQuantity;
}
export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}
