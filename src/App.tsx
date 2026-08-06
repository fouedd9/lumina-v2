import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Ticker } from "./components/sections/Ticker";
import { Features } from "./components/sections/Features";
import { Pricing } from "./components/sections/Pricing";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Faq } from "./components/sections/Faq";
import { Closing } from "./components/sections/Closing";
import { OrderModal } from "./components/order/OrderModal";
import { useOrder } from "./hooks/useOrder";
export default function App() {
  const order = useOrder();
  return (
    <>
      <Header onOrder={order.openOrder} />
      <main>
        <Hero onOrder={order.openOrder} />
        <Ticker />
        <Features />
        <Pricing onOrder={order.openOrder} />
        <HowItWorks />
        <Faq />
        <Closing onOrder={order.openOrder} />
      </main>
      <Footer />
      <OrderModal
        isOpen={order.isOpen}
        quantity={order.quantity}
        onQuantityChange={order.setQuantity}
        onClose={order.closeOrder}
      />
    </>
  );
}
