
const colorThemeCssClass = `
  ${
    colorTheme === 'red'
      ? 'text-red-300'
      : colorTheme === 'sky'
      ? 'text-sky-300'
      : colorTheme === 'brique'
      ? 'text-brique-300'
      : colorTheme === 'blueIntense'
      ? 'text-blueIntense-300'
      : colorTheme === 'orangeIntense'
      ? 'text-orangeIntense-300'
      : 'text-emeraldIntense-300'
  }
`;

export default colorThemeCssClass;
