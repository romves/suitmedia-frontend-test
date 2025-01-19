import { cn } from '@/shared/lib/utils';

const HamburgerButton = ({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="ml-auto grid gap-[5px]"
      onClick={onClick}
      aria-label="Toggle Sidebar"
    >
      <div
        className={cn(
          'h-[3px] w-6 rounded-full transition-all duration-500',
          isActive ? 'translate-y-[8px] -rotate-45 bg-primary-600' : 'bg-white',
        )}
      />
      <div
        className={cn(
          'h-[3px] w-4 rounded-full transition-all duration-500',
          isActive ? 'translate-x-2 bg-primary-600 opacity-0' : 'bg-white',
        )}
      />
      <div
        className={cn(
          'h-[3px] w-6 rounded-full transition-all duration-500',
          isActive ? '-translate-y-[8px] rotate-45 bg-primary-600' : 'bg-white',
        )}
      />
    </button>
  );
};
export default HamburgerButton;
