import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '../components/SearchForm';

describe('SearchForm - Reset Filters', () => {
  it('resets all filters when reset button is clicked', async () => {
    const user = userEvent.setup();
    const onSearchMock = vi.fn();
    render(<SearchForm onSearch={onSearchMock} />);

    // Select property type
    const propertyTypeInput = screen.getByText('Select property type...').parentElement;
    await user.click(propertyTypeInput);
    const flatOption = await screen.findByText('Flat');
    await user.click(flatOption);

    // Select postcode
    const postcodeInput = screen.getByText('Search or select postcode...').parentElement;
    await user.click(postcodeInput);
    const postcodeOption = await screen.findByText('NW1 - North West London');
    await user.click(postcodeOption);

    // Click reset button
    await user.click(
      screen.getByRole('button', { name: /reset filters/i })
    );

    // Verify form is reset - placeholders should be visible again
    expect(screen.getByText('Select property type...')).toBeInTheDocument();
    expect(screen.getByText('Search or select postcode...')).toBeInTheDocument();

    // Submit after reset
    await user.click(
      screen.getByRole('button', { name: /search properties/i })
    );

    // Should search with empty filters
    expect(onSearchMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: '',
        postcode: '',
        minPrice: '',
        maxPrice: '',
      })
    );
  });
});