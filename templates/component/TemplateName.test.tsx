import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { TemplateName, type TemplateNameProps } from '.';

const props: TemplateNameProps = {
  // test props
};

describe('TemplateName', () => {
  it('renders valid HTML', () => {
    const result = render(<TemplateName {...props} />);

    expect(result.container.outerHTML).toHTMLValidate();
  });

  it('passes accessibility tests', async () => {
    const result = render(<TemplateName {...props} />);

    expect(await axe(result.container.outerHTML)).toHaveNoViolations();
  });

  describe('functionality', () => {
    it('renders default children', () => {
      const result = render(<TemplateName {...props}>Test</TemplateName>);

      expect(result.container.outerHTML).toHTMLValidate();

      expect(result.getByText('TemplateName')).toBeInTheDocument();
    });
  });
});
