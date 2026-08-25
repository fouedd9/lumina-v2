import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { packs } from "../../data/store";
import type { PackQuantity } from "../../types/store";
import { Kicker } from "../../styles/primitives";
import { OrderForm } from "./OrderForm";
import { ProductSlider } from "./ProductSlider";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: 18px;
  background: #090909bd;
  backdrop-filter: blur(8px);
`;
const Dialog = styled.div`
  position: relative;
  width: min(980px, 100%);
  max-height: 94vh;
  overflow: auto;
  padding: 24px;
  border-radius: 28px;
  background: ${({ theme }) => theme.colors.paper};
  box-shadow: 0 40px 100px #0006;
`;
const Close = styled.button`
  position: absolute;
  right: 17px;
  top: 17px;
  z-index: 2;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.overlay};
  color: ${({ theme }) => theme.colors.ink};
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: 28px;
  align-items: start;
  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: 1fr;
  }
`;
const Content = styled.div`
  padding: 8px 12px 5px 0;
  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 0;
  }
`;
const Heading = styled.h2`
  margin: 8px 0 6px;
  font: 800 34px/1.1 "Manrope";
  letter-spacing: -0.04em;
`;
const Intro = styled.p`
  margin: 0 0 17px;
  color: ${({ theme }) => theme.colors.muted};
`;
const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 5px;
  padding: 14px 16px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.strong};
  color: white;
  b {
    color: ${({ theme }) => theme.colors.lime};
    font-size: 21px;
  }
`;
interface Props {
  isOpen: boolean;
  quantity: PackQuantity;
  onQuantityChange: (q: PackQuantity) => void;
  onClose: () => void;
}
export function OrderModal({
  isOpen,
  quantity,
  onQuantityChange,
  onClose,
}: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const pack = packs.find((p) => p.quantity === quantity)!;
  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add("modal-open");
    const previous = document.activeElement as HTMLElement;
    dialogRef.current?.focus();
    const key = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", key);
    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", key);
      previous?.focus();
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return createPortal(
    <Overlay onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <Dialog
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-title"
        tabIndex={-1}
      >
        <Close onClick={onClose} aria-label="Fermer">
          <X />
        </Close>
        <Grid>
          <ProductSlider />
          <Content>
            <Kicker>Dernière étape</Kicker>
            <Heading id="order-title">Finaliser ma commande</Heading>
            <Intro>
              Complétez vos informations pour préparer la livraison.
            </Intro>
            <Summary>
              <span>
                {quantity} veilleuse{quantity > 1 ? "s" : ""} Lumina
              </span>
              <b>{pack.price} DT</b>
            </Summary>
            <OrderForm
              quantity={quantity}
              onQuantityChange={onQuantityChange}
            />
          </Content>
        </Grid>
      </Dialog>
    </Overlay>,
    document.body,
  );
}
