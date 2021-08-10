import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import styles from './App.module.scss';
import Mensaje from './mensaje/Mensaje';

function App() {
  const var1 = 'Var1';
  // eslint-disable-next-line no-unused-vars
  const [textoQueCambia, setTextoQueCambia] = useState('Texto Inicial');

  const [paises, setPaises] = useState([]);
  useEffect(() => {
    const getPaises = async () => {
      // Llamo al endpoint https://restcountries.eu/rest/v2/all?fields=name
      const listaPaises = await axios.get('https://restcountries.eu/rest/v2/all?fields=name');
      setPaises(listaPaises.data);
    };
    getPaises();
  }, []);

  return (
    <div className={styles.App}>
      {paises.map((pais) => (
        <p>{pais.name}</p>
      ))}
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <button type="button" onClick={() => setTextoQueCambia('Hice click')}>Boton</button>
        <p>
          {textoQueCambia}
        </p>
        <p>
          {var1}
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <Mensaje />
        <p>
          {process.env.REACT_APP_NOT_SECRET_CODE}
        </p>
        <p>
          {process.env.NODE_ENV}
        </p>
        <Mensaje prop1="Hola" textoSecundario="secundario" />
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
