import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import axios from 'axios';
import App from './App';

// Remove testing of components including Three.js since I'm not sure how to get
// Jest to handle the library.  Scene.jsx also removed from test coverage.
jest.mock('./components/Home/Scene/Scene', () => ({ __esModule: true, default: jest.fn(() => <div />) }));

const host = 'http://localhost:3000';

describe('Client App', () => {
  const testProject = {
    id: 1,
    name: 'portfolio test project',
    description: 'test desc',
    githubLink: 'https://github.com/nickzylstra',
    lastUpdated: '2019-12-15T17:39:14Z',
    image: '/assets/favicon_io/favicon-16x16.png',
    tags: ['interwebs'],
  };
  axios.get.mockImplementationOnce(() => Promise.resolve({
    data: { projects: [testProject] },
  }));

  test('should load app and lazy load each navbar component', async () => {
    const { getByLabelText, getByText, getByTestId } = render(<App host={host} />);
    expect(getByLabelText(/app/i)).toBeInTheDocument();
    expect(getByTestId(/spinner/i)).toBeInTheDocument();
    expect(() => getByLabelText('home-page')).toThrowError();

    const homePageElem = await waitForElement(() => getByLabelText('home-page'));
    expect(homePageElem).toBeInTheDocument();

    fireEvent.click(getByLabelText('portfolio-link'));
    const portfolioTestProjectElem = await waitForElement(() => getByText(testProject.name));
    expect(portfolioTestProjectElem).toBeInTheDocument();
    expect(() => getByLabelText('home-page')).toThrowError();

    fireEvent.click(getByLabelText('about-link'));
    const aboutPageElem = await waitForElement(() => getByLabelText('about-page'));
    expect(aboutPageElem).toBeInTheDocument();
    expect(() => getByLabelText('portfolio-page')).toThrowError();

    fireEvent.click(getByLabelText('home-link'));
    const homePageElemRepeat = await waitForElement(() => getByLabelText('home-page'));
    expect(homePageElemRepeat).toBeInTheDocument();
  });
});
