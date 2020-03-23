import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import App from './App.jsx';

// Remove testing of components including Three.js since I'm not sure how to get
// Jest to handle the library.  Scene.jsx also removed from test coverage.
jest.mock('./components/Home/Scene/Scene.jsx', () => ({ __esModule: true, default: jest.fn(() => <div />) }));

const host = 'http://localhost:3000';

describe('Client App', () => {
  test('should load app component', async () => {
    const { getByLabelText } = render(<App host={host} />);
    const label = getByLabelText(/app/i);

    expect(label).toBeInTheDocument();
  });

  describe('Home', () => {
    let app;
    beforeEach(async () => {
      app = render(<App host={host} />);
    });

    test('should load home component', async () => {
      const { getByLabelText } = app;
      const homeLinkElem = await waitForElement(() => getByLabelText('home-link'));
      fireEvent.click(homeLinkElem);

      const homePage = await waitForElement(() => getByLabelText('home-page'));
      expect(homePage).toBeInTheDocument();
    });

    test('should load portfolio component', async () => {
      const { getByLabelText } = app;
      const portfolioLinkElem = await waitForElement(() => getByLabelText('portfolio-link'));
      fireEvent.click(portfolioLinkElem);

      const portfolioPage = await waitForElement(() => getByLabelText('portfolio-page'));
      expect(portfolioPage).toBeInTheDocument();
    });

    test('should load about component', async () => {
      const { getByLabelText } = app;
      const aboutLinkElem = await waitForElement(() => getByLabelText('about-link'));
      fireEvent.click(aboutLinkElem);

      const aboutPage = await waitForElement(() => getByLabelText('about-page'));
      expect(aboutPage).toBeInTheDocument();
    });
  });
});
