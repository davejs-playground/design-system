import { render } from '@testing-library/react';
import { Button, Props } from '.';

const BUTTON_TEXT = 'Button text';

const props: Props = {
  children: BUTTON_TEXT,
};

const linkProps: Props = {
  ...props,
  href: '/some-link',
};

describe('Button', () => {
  it.each([
    { type: 'button', props },
    { type: 'anchor', props: linkProps },
  ])('renders without errors ($type)', (testCase) => {
    const result = render(<Button {...testCase.props} />);

    expect(result.container.outerHTML).toRenderValidHTML();
  });

  it('renders an <button> tag when no href is specified', () => {
    const { getByText } = render(<Button {...props} />);

    const element = getByText(BUTTON_TEXT);

    expect(element.tagName).toBe('BUTTON');
  });

  it('renders an <a> tag when an href is specified', () => {
    const { getByText } = render(<Button {...linkProps} />);

    const element = getByText(BUTTON_TEXT);

    expect(element.tagName).toBe('A');
  });
});
