export const uniqueTags = (arr: string[][]): string[] => {
  const tags = arr.flat();
  return [...new Set(tags)];
}
