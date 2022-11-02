import './App.css';
import ImgAssets from './assets/imgAssets.jpg'

function App() {
    return (
        <div className="App">
            <h1>Avançando em React</h1>
            {/* Imagem em Public */}
            <div>
                <img src="/imgs/imgPublic.jpg" alt="Paisagem" />
            </div>
            {/* Imagem em Assets */}
            <div>
                <img src={ImgAssets} alt="" />
            </div>
        </div>
    );
}

export default App;
