import { render } from '@testing-library/react';
import { TemplateName, Props } from '.';

const props: Props = {
  // test props
};

describe('TemplateName', () => {
  it('renders without errors', () => {
    const result = render(<TemplateName {...props} />);

    expect(result.container.outerHTML).toRenderValidHTML();
  });
});
