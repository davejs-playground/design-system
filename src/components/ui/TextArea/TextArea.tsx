import clsx from 'clsx';
import { useMemo, useState, type ComponentProps } from 'react';

import { getLength, isTooLong } from './utils';

export type TextAreaProps = ComponentProps<'textarea'> & { label: string };

const TextArea = ({ label, required, maxLength, ...props }: TextAreaProps) => {
  const [value, setValue] = useState(props.value ?? '');
  const tooLong = useMemo(() => isTooLong(value, maxLength), [value, maxLength]);
  const length = useMemo(() => getLength(value), [value]);

  return (
    <label className="flex flex-col gap-1.5">
      <span
        className={clsx(
          'inline-flex items-center gap-1 text-sm font-medium',
          required && 'after:bg-accent-500 after:h-1.5 after:w-1.5 after:rounded-full',
        )}
      >
        {label}
      </span>

      <textarea
        className={clsx(
          'invalid:bg-danger-50 focus:bg-primary-50 focus:ring-primary-600 w-full gap-2 rounded-md bg-white p-4 text-sm placeholder-slate-400 shadow-sm ring-1 ring-slate-500 ring-inset focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 dark:bg-slate-800 dark:placeholder-slate-300',
          tooLong && 'ring-danger-500 dark:ring-danger-500 ring-2',
        )}
        {...props}
        onChange={(e) => {
          setValue(e.target.value);
          if (typeof props.onChange === 'function') props.onChange(e);
        }}
        value={value}
        required={required}
        aria-invalid={tooLong}
      />

      {maxLength && (
        <div className="gap-1.4 flex justify-end text-xs">
          <p className={clsx(tooLong ? 'text-danger-500' : 'text-slate-600')}>
            <span data-testid="length">{length}</span>/{maxLength}
          </p>
        </div>
      )}
    </label>
  );
};

export default TextArea;
