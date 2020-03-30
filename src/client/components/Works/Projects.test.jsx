import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import Projects from './Projects';


describe('Client - Projects', () => {
  const testProjects = [{
    id: 1,
    name: 'works test project',
    description: 'test desc',
    githubLink: 'https://github.com/nickzylstra',
    lastUpdated: '2019-12-15T17:39:14Z',
    image: '/assets/favicon_io/favicon-16x16.png',
    thumb: '/assets/favicon_io/favicon-16x16.png',
    tags: ['interwebs'],
  }];

  test('should load projects and open modal when one is clicked', async () => {
    const { getByLabelText } = render(<Projects projects={testProjects} />);
    expect(getByLabelText(/projects/i)).toBeInTheDocument();

    const worksTestProjectElem = getByLabelText(`project-${testProjects[0].id}`);
    expect(worksTestProjectElem).toBeInTheDocument();

    fireEvent.click(worksTestProjectElem);
    const modalElem = await waitForElement(() => getByLabelText('project-modal'));
    expect(modalElem).toBeInTheDocument();
  });
});
