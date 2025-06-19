
import { Mail, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header = ({ isDarkMode, onToggleDarkMode }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
          <Mail className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            FlareMail
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create compelling emails that convert
          </p>
        </div>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        onClick={onToggleDarkMode}
        className="h-10 w-10"
      >
        {isDarkMode ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Button>
    </header>
  );
};
