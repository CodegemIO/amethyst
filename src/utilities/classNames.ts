export function classNames(potentialNames: Record<string, boolean>) {
  const validNames: string[] = [];

  Object.keys(potentialNames).forEach((className) => {
    if (potentialNames[className]) {
      validNames.push(className);
    }
  });

  return validNames.join(' ');
}
