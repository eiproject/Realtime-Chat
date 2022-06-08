import MainPage from './components/MainPage';

const flexRowStyle = {
  display: 'flex',
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

const windowStyle ={
  margin: '10px',
}

function App() {
  return (
    <div className="App">
      <body style={flexRowStyle}>
        <div style={windowStyle}>
          <MainPage />
        </div>
        <div style={windowStyle}>
          <MainPage />
        </div>
      </body>
    </div>
  );
}

export default App;
