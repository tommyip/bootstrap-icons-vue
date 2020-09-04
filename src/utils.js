const attrs = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 16 16',
  fill: 'currentColor',
  role: 'img',
  focusable: 'false',
};

/**
 * Generate a Vue icon component
 *
 * @param {string} name - Name of the Vue icon component
 * @param {string} svgContent - Inner content of the SVG
 *
 * @returns {object} a Vue component options object
 */
export function genIcon(name, svgContent) {
  return {
    name,
    render: h => h(
      'svg',
      {
        attrs,
        domProps: {
          innerHTML: svgContent,
        },
      },
    ),
  };
}
