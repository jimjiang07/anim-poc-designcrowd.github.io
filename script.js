(function () {
  const canvas = new fabric.StaticCanvas('c');
  const config = { width: 200, height: 50, fill: 'yellow' };

  canvas.setWidth(config.width);
  canvas.setHeight(config.height * 2);

  const rectTop = new fabric.Rect(config);
  const rectBottom = new fabric.Rect({ ...config, top: config.height });

  canvas.add(rectTop, rectBottom);

  const tl = new TimelineLite();
  tl.staggerFromTo(
  [rectTop, rectBottom],
  1,
  { left: -config.width },
  { left: config.width, onUpdate: () => canvas.renderAll() },
  0.4);

  tl.to({}, 1, { onComplete: () => tl.restart() });
})();