import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '../components/SearchForm';

describe('SearchForm - Property Type and Postcode', () => {
  it('searches with property type and postcode', async () => {
    const user = userEvent.setup();
    const onSearchMock = vi.fn();
    render(<SearchForm onSearch={onSearchMock} />);

    // Select Property Type - using react-select
    const propertyTypeInput = screen.getByText('Select property type...').parentElement;
    await user.click(propertyTypeInput);
    
    // Wait for dropdown and select "House"
    const houseOption = await screen.findByText('House');
    await user.click(houseOption);

    // Select Postcode Area - using react-select
    const postcodeInput = screen.getByText('Search or select postcode...').parentElement;
    await user.click(postcodeInput);
    
    const postcodeOption = await screen.findByText('BR1 - Bromley');
    await user.click(postcodeOption);

    // Submit form
    await user.click(
      screen.getByRole('button', { name: /search properties/i })
    );

    // Verify mock was called correctly
    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'house',
        postcode: 'BR1',
      })
    );
  });
});