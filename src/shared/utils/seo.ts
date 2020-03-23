export const serializeTitle = (title: string, maxLength: number = 100): string => {
  const t = title ?? '';

  return t.substring(0, 100).replace(/\s/g, '-');
};
