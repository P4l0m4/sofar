export function isDesktop() {
  return window.innerWidth > 1024;
}

export function isTablet() {
  return window.innerWidth < 1024 && window.innerWidth > 768;
}

export function isMobile() {
  return window.innerWidth < 768;
}

export function parseDMS(dms: string): number {
  const m = dms.match(/(\d{1,3})°(\d{1,2})'(\d{1,2})"([NSEW])/);
  if (!m) return 0;
  const [_, deg, min, sec, dir] = m;
  let dec = +deg + +min / 60 + +sec / 3600;
  return dir === "S" || dir === "W" ? -dec : dec;
}
