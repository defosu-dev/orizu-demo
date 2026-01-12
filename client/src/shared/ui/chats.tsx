import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Skeleton } from '@/shared/ui/skeleton';
import { cn } from '@/lib/utils/cn';

interface ChatsItemProps extends React.HTMLAttributes<HTMLDivElement> {
  username?: string;
  lastMessage?: string;
  time?: string;
  avatarUrl?: string;
  isActive?: boolean;
  loading?: boolean;
}

function Chats({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 overflow-y-auto scroll-smooth',
        className
      )}
      {...props}
    />
  );
}

function Item({
  username,
  lastMessage,
  time,
  avatarUrl,
  isActive = false,
  loading = false,
  className,
  ...props
}: ChatsItemProps) {
  if (loading) {
    return (
      <div
        className={cn(
          'flex items-center gap-2 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-neutral-600/20',
          className
        )}
        {...props}
      >
        <Skeleton className="aspect-square h-12 w-12 rounded-full" />
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full justify-between gap-2">
            <Skeleton className="h-4 w-20 rounded-full" />
            <Skeleton className="h-4 w-8 rounded-full" />
          </div>
          <Skeleton className="h-4 w-28 rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-neutral-600/20',
        isActive ? 'bg-indigo-700 hover:bg-indigo-700' : '',
        className
      )}
      {...props}
    >
      <Avatar>
        {avatarUrl ? (
          <AvatarImage src={avatarUrl} />
        ) : (
          <AvatarFallback>{username?.[0]}</AvatarFallback>
        )}
      </Avatar>
      <div className="flex w-full flex-col gap-1">
        <div className="flex w-full justify-between text-sm font-medium">
          <span>{username}</span>
          <span className="text-xs text-neutral-400">{time}</span>
        </div>
        <span className="truncate text-xs text-neutral-400">{lastMessage}</span>
      </div>
    </div>
  );
}

Chats.Item = Item;

export { Chats };
