import Focus from "./components/Focus";
import Greetings from "./components/Greetings";

export default function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-16">
      <Greetings />
      <Focus />
    </div>
  );
}
