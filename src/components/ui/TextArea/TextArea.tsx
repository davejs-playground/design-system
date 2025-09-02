import clsx from 'clsx';
import { type ComponentProps } from 'react';

import { Textarea as PrimitiveTextarea } from '@/components/primitives/textarea';

import { useTextareaState } from './utils';

export type TextareaProps = ComponentProps<'textarea'> & { label: string };

const Textarea = ({ label, required, maxLength, ...props }: TextareaProps) => {
  const { value, setValue, tooLong, length } = useTextareaState({ value: props.value, maxLength });

  return (
    <label className="flex flex-col gap-1.5">
      <span
        className={clsx(
          'inline-flex items-center gap-1 text-sm font-medium',
          required && 'after:h-1.5 after:w-1.5 after:rounded-full after:bg-accent',
        )}
      >
        {label}
      </span>

      <PrimitiveTextarea
        className={clsx(tooLong && 'ring-2 ring-danger dark:ring-danger')}
        {...props}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

export default Textarea;
