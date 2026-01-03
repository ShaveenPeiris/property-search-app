import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '../components/SearchForm';

describe('SearchForm - Multiple Filters Combined', () => {
  it('searches with multiple filters combined', async () => {
    const user = userEvent.setup();
    const onSearchMock = vi.fn();
    render(<SearchForm onSearch={onSearchMock} />);

    // Select property type
    const propertyTypeInput = screen.getByText('Select property type...').parentElement;
    await user.click(propertyTypeInput);
    const apartmentOption = await screen.findByText('Apartment');
    await user.click(apartmentOption);

    // Select postcode
    const postcodeInput = screen.getByText('Search or select postcode...').parentElement;
    await user.click(postcodeInput);
    const postcodeOption = await screen.findByText('E14 - Canary Wharf');
    await user.click(postcodeOption);

    // Add date from
    const dateFromInput = screen.getByPlaceholderText('Select start date...');
    await user.type(dateFromInput, '15/06/2024');

    // Submit form
    await user.click(
      screen.getByRole('button', { name: /search properties/i })
    );

    // Verify all filters are applied
    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'apartment',
        postcode: 'E14',
        dateFrom: expect.stringContaining('2024'),
      })
    );
  });
});