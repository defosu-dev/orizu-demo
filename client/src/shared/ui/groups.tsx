import * as React from 'react';
import { Folder } from 'lucide-react';
import { cn } from '../../lib/utils/cn';

interface GroupsItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  isActive?: boolean;
  icon?: React.ReactNode;
}

function Groups({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex h-full flex-col gap-2 overflow-y-auto scroll-smooth p-3',
        className
      )}
      {...props}
    />
  );
}

function GroupsItem({
  title,
  isActive = false,
  icon,
  className,
  ...props
}: GroupsItemProps) {
  return (
    <div
      className={cn(
        'flex min-h-10 min-w-10 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-lg px-3 py-2 text-xs transition-colors duration-200',
        isActive
          ? 'bg-indigo-700 hover:bg-indigo-700'
          : 'hover:bg-neutral-600/30',
        className
      )}
      {...props}
    >
      {icon ?? <Folder className="size-5" />}
      {title && <span>{title}</span>}
    </div>
  );
}

Groups.Item = GroupsItem;

export { Groups };
