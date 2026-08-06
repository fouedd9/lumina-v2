import { useCallback, useState } from "react";
import type { PackQuantity } from "../types/store";
export function useOrder() {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState<PackQuantity>(2);
  const openOrder = useCallback((next: PackQuantity = 2) => {
    setQuantity(next);
    setIsOpen(true);
  }, []);
  const closeOrder = useCallback(() => setIsOpen(false), []);
  return { isOpen, quantity, setQuantity, openOrder, closeOrder };
}
