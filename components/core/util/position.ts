<<<<<<< HEAD

export function getAllStyles (element) { return window.getComputedStyle(element); }
export function getStyle(element, prop) { return getAllStyles(element)[prop]; }
export function isStaticPositioned (element) {
=======
export function getAllStyles(element) {
  return window.getComputedStyle(element);
}
export function getStyle(element, prop) {
  return getAllStyles(element)[prop];
}
export function isStaticPositioned(element) {
>>>>>>> upstream/master
  return (getStyle(element, 'position') || 'static') === 'static';
}

export function getOffsetParent(element) {
  let offsetParentEl = element.offsetParent || document.documentElement;
  while (offsetParentEl && offsetParentEl !== document.documentElement && isStaticPositioned(offsetParentEl)) {
    offsetParentEl = offsetParentEl.offsetParent;
  }
  return offsetParentEl || document.documentElement;
}

<<<<<<< HEAD
export function getOffset(element, round) {
  if (round === void 0) { round = true; }
=======
export function getOffset(element) {
>>>>>>> upstream/master
  let elBcr = element.getBoundingClientRect();
  let viewportOffset = {
    top: window.pageYOffset - document.documentElement.clientTop,
    left: window.pageXOffset - document.documentElement.clientLeft
  };
  let elOffset = {
    height: elBcr.height || element.offsetHeight,
    width: elBcr.width || element.offsetWidth,
    top: elBcr.top + viewportOffset.top,
    bottom: elBcr.bottom + viewportOffset.top,
    left: elBcr.left + viewportOffset.left,
    right: elBcr.right + viewportOffset.left
  };
<<<<<<< HEAD
  if (round) {
    elOffset.height = Math.round(elOffset.height);
    elOffset.width = Math.round(elOffset.width);
    elOffset.top = Math.round(elOffset.top);
    elOffset.bottom = Math.round(elOffset.bottom);
    elOffset.left = Math.round(elOffset.left);
    elOffset.right = Math.round(elOffset.right);
  }
  return elOffset;
}

export function getPosition(element, round) {
  if (round === void 0) { round = true; }
=======
  return elOffset;
}

export function getPosition(element) {
>>>>>>> upstream/master
  let elPosition;
  let parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
  if (getStyle(element, 'position') === 'fixed') {
    elPosition = element.getBoundingClientRect();
  } else {
    let offsetParentEl = getOffsetParent(element);
<<<<<<< HEAD
    elPosition = getOffset(element, false);
    if (offsetParentEl !== document.documentElement) {
      parentOffset = getOffset(offsetParentEl, false);
=======
    elPosition = getOffset(element);
    if (offsetParentEl !== document.documentElement) {
      parentOffset = getOffset(offsetParentEl);
>>>>>>> upstream/master
    }
    parentOffset.top += offsetParentEl.clientTop;
    parentOffset.left += offsetParentEl.clientLeft;
  }
  elPosition.top -= parentOffset.top;
  elPosition.bottom -= parentOffset.top;
  elPosition.left -= parentOffset.left;
  elPosition.right -= parentOffset.left;
<<<<<<< HEAD
  if (round) {
    elPosition.top = Math.round(elPosition.top);
    elPosition.bottom = Math.round(elPosition.bottom);
    elPosition.left = Math.round(elPosition.left);
    elPosition.right = Math.round(elPosition.right);
  }
=======
>>>>>>> upstream/master
  return elPosition;
}

export function getPositionElements(hostElement, targetElement, placement, appendToBody) {
<<<<<<< HEAD
  let hostElPosition = appendToBody ? getOffset(hostElement, false) : getPosition(hostElement, false);
=======
  let hostElPosition = appendToBody ? getOffset(hostElement) : getPosition(hostElement);
>>>>>>> upstream/master
  let targetElStyles = getAllStyles(targetElement);
  let targetElBCR = targetElement.getBoundingClientRect();
  let placementPrimary = placement.split('-')[0] || 'top';
  let placementSecondary = placement.split('-')[1] || 'center';
  let targetElPosition = {
<<<<<<< HEAD
    'height': targetElBCR.height || targetElement.offsetHeight,
    'width': targetElBCR.width || targetElement.offsetWidth,
    'top': 0,
    'bottom': targetElBCR.height || targetElement.offsetHeight,
    'left': 0,
    'right': targetElBCR.width || targetElement.offsetWidth
=======
    height: targetElBCR.height || targetElement.offsetHeight,
    width: targetElBCR.width || targetElement.offsetWidth,
    top: 0,
    bottom: targetElBCR.height || targetElement.offsetHeight,
    left: 0,
    right: targetElBCR.width || targetElement.offsetWidth
>>>>>>> upstream/master
  };
  switch (placementPrimary) {
    case 'top':
      targetElPosition.top =
        hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
      break;
    case 'bottom':
      targetElPosition.top = hostElPosition.top + hostElPosition.height;
      break;
    case 'left':
      targetElPosition.left =
        hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
      break;
    case 'right':
      targetElPosition.left = hostElPosition.left + hostElPosition.width;
      break;
  }
  switch (placementSecondary) {
    case 'top':
      targetElPosition.top = hostElPosition.top;
      break;
    case 'bottom':
      targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
      break;
    case 'left':
      targetElPosition.left = hostElPosition.left;
      break;
    case 'right':
      targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
      break;
    case 'center':
      if (placementPrimary === 'top' || placementPrimary === 'bottom') {
        targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
      } else {
        targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
      }
      break;
  }
  targetElPosition.top = Math.round(targetElPosition.top);
  targetElPosition.bottom = Math.round(targetElPosition.bottom);
  targetElPosition.left = Math.round(targetElPosition.left);
  targetElPosition.right = Math.round(targetElPosition.right);
  return targetElPosition;
<<<<<<< HEAD
}
=======
}
>>>>>>> upstream/master
