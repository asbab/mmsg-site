import PropTypes from 'prop-types';
import React from 'react';

import Page from '../Page';

import styles from './index.css';

const PageError = ({error, errorText}) =>
  <Page
    head={{
      // hero credit: https://www.flickr.com/photos/mypubliclands/16101654539/
      hero: 'https://farm8.staticflickr.com/7559/16101654539_bee5151340_k.jpg',
    }}>
    <div className={styles.container}>
      <div className={styles.oops}>{'😱 Oooops!'}</div>
      <div className={styles.text}>
        <p className={styles.title}>
          <strong>{error}</strong>
          {' '}
          {errorText}
        </p>
        {error === 404 &&
          <div>
            Il semble que nous ayons un problème pour afficher cette page
            <br />
            Vous pouvez essayer de{' '}
            <a href="javascript:window.location.href=window.location.href">
              recharger
            </a>{' '}
            cette page ou retrourner à la <a href=".">page principale</a>
            <br />
            Nous sommes désolés du désagrément.
          </div>}
      </div>
    </div>
  </Page>;

PageError.propTypes = {
  error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorText: PropTypes.string,
};

PageError.defaultProps = {
  error: 404,
  errorText: 'Page non trouvée',
};

export default PageError;
