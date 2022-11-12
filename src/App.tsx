import "./App.css";
import Box from "./components/Box";
import bit from "./assets/bitcoin.png";
import solana from "./assets/Solana.png";
import eth from "./assets/eth.jpg";
import benance from "./assets/binance.png";
import shiba from "./assets/shiba.png";

function App() {
  return (
    <div className="flex w-full">
      <Box
        image={bit}
        name="Bitcoin(BTC)"
        amount="$31,812.80"
        subimg1={solana}
        subimg2={eth}
        subimg3={benance}
        style={{ color: "#00FFA3" }}
        percent="+10%"
      />
      <Box
        image={solana}
        name="Solana(SOL)"
        amount="$32.83"
        subimg1={bit}
        subimg2={eth}
        subimg3={benance}
        style={{ color: "red" }}
        percent="-12.32%"
      />
      <Box
        image={eth}
        name="Ethereum(ETH)"
        amount="$1,466.45"
        subimg1={solana}
        subimg2={bit}
        style={{ color: "#00FFA3" }}
        subimg3={benance}
        percent="-11.93%"
      />
      <Box
        image={benance}
        name="Binance(BUSD)"
        amount="$1.00"
        subimg1={solana}
        subimg2={eth}
        subimg3={benance}
        style={{ color: "red" }}
        percent="+0.26%"
      />
      <Box
        image={shiba}
        name="Shiba Inu(SHIB)"
        amount="$0.00001948"
        subimg1={solana}
        subimg2={eth}
        subimg3={benance}
        style={{ color: "red" }}
        percent="-8.1%"
      />
    </div>
  );
}

export default App;
