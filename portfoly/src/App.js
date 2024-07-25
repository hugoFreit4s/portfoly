import './App.css';
import Dados from './components/Dados';

function App() {
  function handleClick(){
    console.log('I am clicked!');
  }

  return (
    <div className="main">
      <video autoPlay loop muted className="bg-video">
        <source src={process.env.PUBLIC_URL + '/bg-video.mp4'} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      <div className="square">
        <Dados />
        <div className="projects-social">
          <div className="buttons">
            <div className="button1">
              <button onClick={handleClick}>PROJECTS</button>
            </div>
            <div className="button2">
              <button>SOCIAL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;