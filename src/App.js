import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Portofolio from "./components/Portofolio";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Whywe from "./components/Whywe";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Whywe/>
        <Services/>
        <Portofolio />
        <Clients/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
