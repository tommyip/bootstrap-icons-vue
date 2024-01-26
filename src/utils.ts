import { h, ComponentOptions } from "vue";

const attrs = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  role: "img",
  focusable: "false",
};

export function genIcon(name: string, svgContent: string): ComponentOptions {
  return {
    name,
    render() {
      return h("svg", {
        ...attrs,
        innerHTML: svgContent,
      });
    },
  };
}
