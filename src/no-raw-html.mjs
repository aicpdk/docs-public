export const noRawHtml = {
  name: "no-raw-html",
  html(node, ctx) {
    ctx.replaceNode(node, { type: "text", value: node.value });
  },
};
