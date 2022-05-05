import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const getCriteria = async () => {
            try {
                const response = await axios.delete('http://35.228.111.234:3000/webpage/625d636b0447d8d35ba977a0', {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                });
                console.log('criteriaResponse--', response);
            } catch (error) {
                console.warn({ error });
            }
        };
        getCriteria();
    }, []);
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <img src={logo} alt="logo" style={{height: 50, width: 'auto' }}/>
            <div>
                <p>
                    Title
                </p>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
            {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        </div>
    );
}

export default App;
