export function isDesktop() {
  return window.innerWidth > 1024;
}

export function isTablet() {
  return window.innerWidth < 1024 && window.innerWidth > 768;
}

export function isMobile() {
  return window.innerWidth < 768;
}
