import * as LucideIcons from 'lucide-react';
import { ElementType } from 'react';

export const correctClass = (primary: string, className: string) => {
    return className ? `${primary} ${className}` : primary
}

export const correctUrl = (primaryUrl: string, path: string) => {
  const trimmedUrlHost = primaryUrl.endsWith('/') ? primaryUrl.slice(0, -1) : primaryUrl;
  const trimmedUrlData = path.startsWith('/') ? path.slice(1) : path;
  return `${trimmedUrlHost}/${trimmedUrlData}`
}

export const getIconComponent = (iconName: string): ElementType => {
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as ElementType;
    return IconComponent || LucideIcons.HelpCircle;
};

export const truncate_string = (str: string, length: number) => {
    return str.length > length ? str.slice(0, length - 3) + "..." : str;
}

export function attachSubComponents<
  C extends React.ComponentType<any>,
  O extends Record<string, React.ComponentType<any>>
>(displayName: string, topLevelComponent: C, otherComponents: O): C & O {
  topLevelComponent.displayName = displayName;
  Object.values(otherComponents).forEach(
    (component) =>
      (component.displayName = `${displayName}.${component.name}`)
  );

  return Object.assign(topLevelComponent, otherComponents);
}
