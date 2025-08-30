import { render } from '@testing-library/react';
import { Link, Props } from '.';

const props: Props = {
  children: 'My Link',
  href: '/my-path',
};

describe('Link', () => {
  it('renders without errors', () => {
    const result = render(<Link {...props} />);

    expect(result.container.outerHTML).toRenderValidHTML();
  });

  it('correctly attaches href value', () => {
    const { getByText } = render(<Link {...props} external />);
    const linkElement = getByText('My Link');
    expect(linkElement.getAttribute('href')).toBe('/my-path');
  });

  it('renders hidden text for external links', () => {
    const { queryByText } = render(<Link {...props} external />);
    const hiddenText = queryByText('(open in new tab)');
    expect(hiddenText).not.toBeNull();
  });

  it('opens external links in a new tab', () => {
    const { getByText } = render(<Link {...props} external />);
    const linkElement = getByText('My Link');
    expect(linkElement.getAttribute('target')).toBe('_blank');
  });
});
