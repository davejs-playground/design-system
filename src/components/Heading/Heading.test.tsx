import { render } from '@testing-library/react';
import { Heading } from '.';

describe('Heading', () => {
  it('renders correct heading for level', () => {
    const { queryByText } = render(
      <>
        <Heading level={1}>Level 1 Heading</Heading>
        <Heading level={2}>Level 2 Heading</Heading>
      </>
    );

    const heading1 = queryByText('Level 1 Heading');
    const heading2 = queryByText('Level 2 Heading');

    expect(heading1?.tagName).toBe('H1');
    expect(heading2?.tagName).toBe('H2');
  });
});
