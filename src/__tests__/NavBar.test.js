/* eslint-disable import/extensions */
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import NavBar from '../components/NavBar';
import store from '../redux/store';

describe('Navbar component', () => {
  test('Renders Navbar component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <NavBar />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
