import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '../components/SearchForm';

describe('SearchForm - Date Range Filters', () => {
  it('searches with date range filters', async () => {
    const user = userEvent.setup();
    const onSearchMock = vi.fn();
    render(<SearchForm onSearch={onSearchMock} />);

    // Find date picker inputs
    const dateFromInput = screen.getByPlaceholderText('Select start date...');
    const dateToInput = screen.getByPlaceholderText('Select end date...');

    // Type dates directly into DatePicker inputs
    await user.type(dateFromInput, '01/01/2024');
    await user.type(dateToInput, '31/12/2024');

    // Submit form
    await user.click(
      screen.getByRole('button', { name: /search properties/i })
    );

    // Verify dates were included in search
    expect(onSearchMock).toHaveBeenCalledTimes(1);
    
    // Get the actual call to check the dates
    const callArgs = onSearchMock.mock.calls[0][0];
    
    // Check that dateFrom and dateTo exist and are valid date strings
    expect(callArgs.dateFrom).toBeTruthy();
    expect(callArgs.dateTo).toBeTruthy();
    
    // Check that the dates contain 2024 (accounting for timezone issues)
    expect(callArgs.dateFrom).toMatch(/2023-12-31|2024-01-01/);
    expect(callArgs.dateTo).toMatch(/2024-12-30|2024-12-31/);
  });
});