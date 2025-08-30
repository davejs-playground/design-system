import { styled } from '@linaria/react';
import { Heading } from './components/Heading';
import Prose from './components/Prose/Prose';

import ReactLogo from './assets/react.svg';
import { Button } from './components/Button';
import { Link } from './components/Link';

const Grid = styled.main`
  display: grid;
  --width: 80ch;
  --gutter: 1rem;
  --content: min(100% - 2 * var(--gutter), var(--width));

  column-gap: var(--gutter);
  grid-template-columns: auto [content-start] var(--content) [content-end] auto;
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: normal;
  gap: 2rem;
  padding: 5rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

function App() {
  const onClick = () => {
    alert('Hello!');
  };

  return (
    <Grid>
      <Content>
        <ReactLogo />
        <Heading level={1}>React + TypeScript</Heading>
        <Prose>
          <p>
            This is a minimal setup for a React app with TypeScript, Linaria,
            and SVGR. It&apos;s a starting point for building a modern web app
            with a focus on performance and developer experience.
          </p>
          <p>
            The project is set up with <code>vitest</code> for testing and{' '}
            <code>prettier</code> for formatting. It includes a simple test and
            a GitHub Actions workflow for continuous integration.
          </p>
        </Prose>
        <ButtonContainer>
          <Button onClick={onClick}>Click me!</Button>
          <Link href="https://github.com/davidleger95/sample-react-ts" external>
            View on GitHub
          </Link>
        </ButtonContainer>
      </Content>
    </Grid>
  );
}

export default App;
