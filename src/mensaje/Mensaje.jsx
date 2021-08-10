import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mensaje.module.scss';

const Mensaje = (props) => {
  // Object destructuring
  const { prop1: texto, textoSecundario } = props;
  console.log(texto);
  console.log(textoSecundario);
  return (
    <>
      <p className={styles.miEstilo}>{texto}</p>
      <p className={styles.secundario}>{textoSecundario}</p>
    </>
  );
};

Mensaje.propTypes = {
  prop1: PropTypes.string,
  textoSecundario: PropTypes.string,
};

Mensaje.defaultProps = {
  prop1: 'Texto 1 por defecto',
  textoSecundario: 'Texto secundario por defecto',
};

export default Mensaje;
