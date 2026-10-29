interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "upgrades", path: "/upgrades", isContentType: true },
  { key: "steam", path: "/steam", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
  { key: "media", path: "/media", isContentType: true },
  { key: "related", path: "/related", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
