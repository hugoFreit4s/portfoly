import './App.css';

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
        <div className="profilepic">
          <img id="profile-pic" src="profile-pic.jpg" />
          <h1 id="name">Hugo de Freitas</h1>
          <h2 id="title">Jr. Fullstack Developer</h2>
        </div>
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