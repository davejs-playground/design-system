import { ComponentProps, useMemo, useState } from 'react';

export const getLength = (value: ComponentProps<'textarea'>['value']): number => {
  if (typeof value !== 'string') return 0;
  return value.length;
};

export const isTooLong = (
  value: ComponentProps<'textarea'>['value'],
  maxLength: ComponentProps<'textarea'>['maxLength'],
): boolean => {
  if (typeof value !== 'string') return false;
  if (!maxLength) return false;
  return value.length > maxLength;
};

type InitialState = {
  value?: ComponentProps<'textarea'>['value'];
  maxLength?: ComponentProps<'textarea'>['maxLength'];
};

export const useTextareaState = (init: InitialState) => {
  const [value, setValue] = useState(init.value ?? '');

  const tooLong = useMemo(() => isTooLong(value, init.maxLength), [value, init.maxLength]);
  const length = useMemo(() => getLength(value), [value]);

  return { value, setValue, tooLong, length };
};
