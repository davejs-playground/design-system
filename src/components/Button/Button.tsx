import { css } from '@linaria/core';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

const className = css`
  --_border: 2px;
  display: flex;
  align-items: center;
  width: max-content;
  gap: 1ch;
  border-radius: 0.25em;
  border: none;

  cursor: pointer;
  background-color: var(--color-text);
  color: var(--color-background);
  padding: 0.5em 1.25em;
  font-size: 0.8em;
  font-weight: 600;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-background);
    text-decoration: none;
  }

  &:focus {
    outline: 1px solid var(--color-text);
    outline-offset: 2px;
    text-decoration: none;
  }
`;

// Note: can't do discriminated union type on these... :/
export type Props =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
  if (anchorProps.href) {
    return <a className={className} {...anchorProps} />;
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button className={className} type="button" {...buttonProps} />;
};

export default Button;
