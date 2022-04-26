import logo from './logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="Page Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Welcome
        </p>
      </header>
    </div>
  );
}

export default Home;
