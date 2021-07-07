function validateSVG(svgText: string) {
  const entityRegexp = /\s*<!Entity\s+\S*\s*(?:"|')[^"]+(?:"|')\s*>/gim;
  const cleanedSvgText = svgText.replace(entityRegexp, '');

  const validRegexp = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?(?:<svg[^>]*>[^]*<\/svg>|<svg[^/>]*\/\s*>)\s*$/i;

  return Boolean(svgText) && validRegexp.test(cleanedSvgText);
}

export {validateSVG};
