export type TemplateNameProps = React.ComponentProps<'div'> & {
  children?: React.ReactNode;
};

const TemplateName = ({ children = 'TemplateName', ...props }: TemplateNameProps) => {
  // component logic

  return <div {...props}>Hello, ${children}!</div>;
};

export default TemplateName;
