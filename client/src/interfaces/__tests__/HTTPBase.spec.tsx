import { render } from '@testing-library/react';
import Header from '@/components/Header';
describe('App', () => {
  it('should work as expected', () => {
    render(<Header />);
  });
});