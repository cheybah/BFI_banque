export interface SidebarItem {
    title: string; // Item text
    icon: string; // Bootstrap icon class
    link?: string; // Optional link
    isActive?: boolean; // Optional flag for active item
    submenu?: SidebarItem[]; // Optional submenu
    isSubmenuVisible?: boolean; // Indicates if the submenu is visible

  }
  