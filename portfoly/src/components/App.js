import './App.css';

function App() {
  return (
    <div className="main">
      <video autoPlay loop muted className="bg-video">
        <source src={process.env.PUBLIC_URL + '/bg-video.mp4'} type="video/mp4" />
        Seu navegador não suporta o vídeo de fundo.
      </video>
    </div>
  );
}

export default App;