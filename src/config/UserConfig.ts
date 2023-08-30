export interface UserConfig {
  docs?: SiteConfig | SiteConfig[];
}

interface SiteConfig {
  lang?: string;
  name?: string;
  description?: string;
  menu?: MenuItem[];
  foobar: string;
}

interface MenuItem {
  type?: MenuItemType;
  text: string;
  path?: string;
  link?: string;
  menu?: MenuItem[];
  collapsible?: boolean;
}

type MenuItemType = 'link' | 'group' | 'divider';
