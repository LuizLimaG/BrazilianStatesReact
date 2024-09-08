import { useEffect, useState } from 'react';
import RegionScreen from './Components/regioes/RegionScreen.jsx'
import Footer from './Components/footer/Footer.jsx'
import './App.css';

function App() {
  const [regionData, setRegionData] = useState([]);
  const [currentRegionIndex, setCurrentRegionIndex] = useState(0);

  useEffect(() => {
    const url = 'https://raw.githubusercontent.com/LuizLimaG/ApiBrazilianStates/main/app.json';
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setRegionData(result);
      });
  }, []);

  const selectedRegion = regionData[currentRegionIndex];

  return (
    <>
      <h1>Desafio - Estados do Brasil</h1>
      <div className="region-selection">
        {regionData.map((region, index) => (
          <button key={index} onClick={() => setCurrentRegionIndex(index)}>
            {region.Região}
          </button>
        ))}
      </div>
      {selectedRegion && <RegionScreen regionData={selectedRegion} />}
      <Footer />
    </>
  )
}

export default App;
