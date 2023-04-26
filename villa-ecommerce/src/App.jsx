import { Router } from "./components/Router/Router";
import { CartProvider } from "./context/ItemsContext";

function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
}

export default App;
