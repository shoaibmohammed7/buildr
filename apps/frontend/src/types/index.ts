export interface Theme {
  isDark: boolean;
}

export interface EditorTab {
  id: string;
  label: string;
  type: 'code' | 'preview';
  active: boolean;
}