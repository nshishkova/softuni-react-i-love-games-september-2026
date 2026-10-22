import { it, expect } from 'vitest';
import { createRoot } from 'react-dom/client';
import Footer from './Footer';
import { act } from 'react';
import { render, screen } from '@testing-library/react';

it('should render the footer correctly - old school', async () => {
    // Create a container for the footer component
    const container = document.createElement('div');

    // Append the container to the document body so it can be rendered into
    document.body.appendChild(container);

    // Create a root for the container so we can render the footer into it
    const root = createRoot(container);

    // Render the footer component into the root
    act(() => {
        root.render(<Footer />);
    });
    
    // Select the paragraph element inside the footer
    const resultElement = document.querySelector('footer > p');

    // Assert that the footer was rendered correctly
    expect(resultElement.textContent).to.include('SoftUni');

    // Manually unmount the root and remove the container from the document body
    root.unmount(); 
    container.remove();

});

it('should render the footer correctly - using testing library', async () => {
    render(<Footer />); 
    
    // Select the paragraph element inside the footer
    const resultElement = screen.getByRole('paragraph');

    // Assert that the footer was rendered correctly
    expect(resultElement.textContent).to.include('SoftUni');

});

it('should render the footer correctly - using jest-dom matchers', async () => {
    // Render the footer 
    render(<Footer />); 

    // Assert 
    expect(screen.getByText(/SoftUni/i)).toBeInTheDocument();

});