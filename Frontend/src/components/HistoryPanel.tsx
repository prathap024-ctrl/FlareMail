
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Trash2, Search, Filter, Calendar, Mail } from 'lucide-react';
import { GeneratedEmail } from '@/pages/Index';
import { format } from 'date-fns';

interface HistoryPanelProps {
  emails: GeneratedEmail[];
  onToggleFavorite: (id: string) => void;
  onDelete: (id: string) => void;
}

export const HistoryPanel = ({ emails, onToggleFavorite, onDelete }: HistoryPanelProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const filteredEmails = emails.filter((email) => {
    const matchesSearch = 
      email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.targetAudience.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.productService.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = 
      filterBy === 'all' ||
      (filterBy === 'favorites' && email.isFavorite) ||
      (filterBy === 'recent' && new Date().getTime() - email.timestamp.getTime() < 7 * 24 * 60 * 60 * 1000);

    return matchesSearch && matchesFilter;
  });

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 h-fit">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Email Library
        </CardTitle>
        <CardDescription>
          Your saved emails and templates ({emails.length} total)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search emails..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger>
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Emails</SelectItem>
              <SelectItem value="favorites">Favorites Only</SelectItem>
              <SelectItem value="recent">Recent (7 days)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <ScrollArea className="h-[600px]">
          <div className="space-y-3">
            {filteredEmails.length === 0 ? (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <Mail className="h-12 w-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" />
                <p>No emails found</p>
                <p className="text-sm">Try adjusting your search or filter</p>
              </div>
            ) : (
              filteredEmails.map((email) => (
                <Card key={email.id} className="border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow dark:bg-gray-700/50">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-sm line-clamp-2 flex-1">
                          {email.subject}
                        </h4>
                        <div className="flex items-center gap-1 ml-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onToggleFavorite(email.id)}
                            className="h-8 w-8 p-0"
                          >
                            <Heart 
                              className={`h-4 w-4 ${
                                email.isFavorite 
                                  ? 'fill-red-500 text-red-500' 
                                  : 'text-gray-400'
                              }`} 
                            />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onDelete(email.id)}
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="secondary" className="text-xs">
                            {email.targetAudience}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {email.tone}
                          </Badge>
                        </div>
                        
                        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                          {email.productService}
                        </p>
                        
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="h-3 w-3" />
                          {format(email.timestamp, 'MMM d, yyyy')}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
