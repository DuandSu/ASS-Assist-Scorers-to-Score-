// import { render, screen } from '@testing-library/react';
import { render} from '@testing-library/react';
import AssApp from './AssApp';

test('renders learn react link', () => {
  render(<AssApp />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
