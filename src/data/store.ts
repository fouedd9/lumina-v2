import { BatteryCharging, Hand, Sparkles } from "lucide-react";
import productImage from "../assets/images/lumina-product.png";
import bedroomImage from "../assets/images/lumina-bedroom.png";
import restaurantImage from "../assets/images/lumina-restaurant.png";
import type { GalleryImage, Pack } from "../types/store";
export const WHATSAPP_NUMBER = "33767653082";
export const packs: Pack[] = [
  {
    quantity: 1,
    name: "OFFRE DÉCOUVERTE",
    label: "1 Lumina",
    price: 59,
    description: "Idéale pour commencer",
  },
  {
    quantity: 2,
    name: "OFFRE DUO",
    label: "2 Lumina",
    price: 100,
    description: "50 DT / pièce · économisez 18 DT",
    
  },
  {
    quantity: 10,
    name: "OFFRE MAXI",
    label: "10 Lumina",
    price: 400,
    description: "40 DT / pièce · économisez 190 DT",
    featured: true,
  },
];
export const gallery: GalleryImage[] = [
  {
    src: productImage,
    alt: "Veilleuse Lumina seule en studio",
    label: "Le produit",
  },
  {
    src: bedroomImage,
    alt: "Lumina sur une table de nuit dans une chambre moderne",
    label: "Dans la chambre",
  },
  {
    src: restaurantImage,
    alt: "Lumina sur une table de restaurant chic",
    label: "Au restaurant",
  },
];
export const features = [
  {
    icon: Sparkles,
    title: "Ambiance sur mesure",
    text: "Ajustez l’intensité pour une lumière douce, chaleureuse ou plus vive selon le moment.",
  },
  {
    icon: BatteryCharging,
    title: "100 % sans fil",
    text: "Rechargez-la par USB puis posez-la où vous voulez, sans câble qui traverse la pièce.",
  },
  {
    icon: Hand,
    title: "Élégante partout",
    text: "Sa silhouette minimaliste s’intègre sur une table, un bureau ou une table de chevet.",
  },
];
export const faqs = [
  [
    "Comment passer ma commande ?",
    "Choisissez une offre, complétez vos informations puis cliquez sur le bouton vert. WhatsApp s’ouvre avec votre commande déjà préparée.",
  ],
  [
    "Comment se passe le paiement ?",
    "Vous payez votre commande à la livraison. Aucun paiement en ligne n’est demandé.",
  ],
  [
    "La veilleuse fonctionne-t-elle sans câble ?",
    "Oui. Lumina se recharge par USB et peut ensuite être utilisée sans fil.",
  ],
  [
    "Puis-je commander plusieurs pièces ?",
    "Oui : le Duo coûte 100 DT pour 2 pièces et le Maxi 400 DT pour 10 pièces.",
  ],
];
