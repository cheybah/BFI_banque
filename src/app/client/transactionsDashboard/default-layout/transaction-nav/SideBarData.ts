export interface SideBarData {
    title?: string;
    link?: string;
    icon?: string;
    isActive?: boolean;
    expanded?: boolean;
    subitems?: SideBarData[];     // Optional array of subitems
  }