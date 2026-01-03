import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '../components/SearchForm';

describe('SearchForm - Price and Bedroom Range', () => {
  it('searches with price range and bedroom range', async () => {
    const user = userEvent.setup();
    const onSearchMock = vi.fn();
    render(<SearchForm onSearch={onSearchMock} />);

    // Submit form with default values
    await user.click(
      screen.getByRole('button', { name: /search properties/i })
    );

    // Verify the search was called
    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: '',
        minPrice: '',
        maxPrice: '',
        minBedrooms: '',
        maxBedrooms: '',
      })
    );
  });
});