import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
import Nav from './components/Navigation';

const App = () => (
  <Router>
    <div>
      {/* <!-- Extra details for Live View on GitHub Pages --></div> */}
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          title="noscript"
          src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <Nav />
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
