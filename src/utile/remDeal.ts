((doc, win): void => {
  const docEl = doc.documentElement;
  /**
   * orientationchange 判断设备是处于横屏还是竖屏了
   */
  const resizeEvt: string =
    'orientationchange' in window ? 'orientationchange' : 'resize';
  const recalc = (): void => {
    const clientWidth = docEl.clientWidth;
    if (!clientWidth) {
      return;
    } else {
      docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
      return;
    }
  };
  if (!doc.addEventListener) {
    return;
  }
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
