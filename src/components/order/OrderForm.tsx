import { useState } from "react";
import styled from "styled-components";
import { packs, WHATSAPP_NUMBER } from "../../data/store";
import type { OrderDetails, PackQuantity } from "../../types/store";

const Form = styled.form`
  min-width: 0;
`;
const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    grid-template-columns: 1fr;
  }
`;
const Field = styled.label`
  display: block;
  margin-top: 13px;
  font-size: 13px;
  font-weight: 800;
  span {
    display: block;
    margin-bottom: 6px;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 12px 13px;
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.ink};
    outline: none;
    font-weight: 400;
    &:focus {
      border-color: ${({ theme }) => theme.colors.orange};
      box-shadow: 0 0 0 3px #ff714120;
    }
  }
  textarea {
    resize: vertical;
  }
`;
const Send = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 15px;
  border: 0;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.whatsapp};
  color: #073216;
  font-weight: 800;
  font-size: 15px;
`;
const Legal = styled.p`
  margin: 9px 0 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 11px;
  line-height: 1.4;
`;
const Error = styled.p`
  margin: 9px 0 0;
  color: #ff7777;
  font-size: 12px;
`;

interface Props {
  quantity: PackQuantity;
  onQuantityChange: (q: PackQuantity) => void;
}

export function OrderForm({ quantity, onQuantityChange }: Props) {
  const [error, setError] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setError(true);
      form.reportValidity();
      return;
    }
    setError(false);
    const data = Object.fromEntries(new FormData(form)) as Record<
      string,
      string
    >;
    const details: OrderDetails = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      address: data.address,
      quantity: Number(data.quantity) as PackQuantity,
    };
    const pack = packs.find((p) => p.quantity === details.quantity)!;
    window.fbq?.("track", "Purchase", {
      value: pack.price,
      currency: "TND",
    });
    const message = [
      "Bonjour Lumina 👋",
      "",
      "Je souhaite confirmer une nouvelle commande :",
      "",
      `👤 Nom et prénom : ${details.firstName.trim()} ${details.lastName.trim()}`,
      `📞 Téléphone : ${details.phone.trim()}`,
      `📍 Adresse complète : ${details.address.trim()}`,
      `📦 Nombre d’articles : ${details.quantity}`,
      `💰 Prix total : ${pack.price} DT`,
      "",
      "Merci de me confirmer la commande et la livraison.",
    ].join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <Form onSubmit={submit} noValidate>
      <Fields>
        <Field>
          <span>Prénom *</span>
          <input
            name="firstName"
            autoComplete="given-name"
            required
            placeholder="Votre prénom"
          />
        </Field>
        <Field>
          <span>Nom *</span>
          <input
            name="lastName"
            autoComplete="family-name"
            required
            placeholder="Votre nom"
          />
        </Field>
      </Fields>
      <Field>
        <span>Téléphone *</span>
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          placeholder="Ex. 22 123 456"
        />
      </Field>
      <Field>
        <span>Adresse complète *</span>
        <textarea
          name="address"
          rows={3}
          autoComplete="street-address"
          required
          placeholder="Rue, numéro, ville et code postal"
        />
      </Field>
      <Field>
        <span>Nombre d’articles *</span>
        <select
          name="quantity"
          value={quantity}
          onChange={(e) =>
            onQuantityChange(Number(e.target.value) as PackQuantity)
          }
        >
          {packs.map((p) => (
            <option key={p.quantity} value={p.quantity}>
              {p.quantity} pièce{p.quantity > 1 ? "s" : ""} — {p.price} DT
            </option>
          ))}
        </select>
      </Field>
      {error && <Error>Merci de compléter tous les champs correctement.</Error>}
      <Send type="submit">Continuer sur WhatsApp ↗</Send>
      <Legal>
        WhatsApp s’ouvrira avec votre commande préremplie. Vous gardez le
        contrôle avant l’envoi.
      </Legal>
    </Form>
  );
}
