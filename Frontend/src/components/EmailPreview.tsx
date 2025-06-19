import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Copy, RefreshCw, Save, Check, Mail } from 'lucide-react';
import { GeneratedEmail } from '@/store/slices/emailSlice';
import { useToast } from '@/hooks/use-toast';

interface EmailPreviewProps {
  email: GeneratedEmail | null;
  onSave: (email: GeneratedEmail) => void;
  onRegenerate: () => void;
}

export const EmailPreview = ({ email, onSave, onRegenerate }: EmailPreviewProps) => {
  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedContent, setCopiedContent] = useState(false);
  const [editedSubject, setEditedSubject] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (email) {
      setEditedSubject(email.subject);
      setEditedContent(email.content);
    }
  }, [email]);

  const handleCopy = async (text: string, type: 'subject' | 'content') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'subject') {
        setCopiedSubject(true);
        setTimeout(() => setCopiedSubject(false), 2000);
      } else {
        setCopiedContent(true);
        setTimeout(() => setCopiedContent(false), 2000);
      }
      toast({
        title: "Copied to clipboard",
        description: `Email ${type} has been copied to your clipboard.`,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying manually.",
        variant: "destructive",
      });
    }
  };

  const handleSave = () => {
    if (!email) return;
    
    const updatedEmail = {
      ...email,
      subject: editedSubject,
      content: editedContent,
    };
    
    onSave(updatedEmail);
    toast({
      title: "Email saved",
      description: "Your email has been saved to your library.",
    });
  };

  if (!email) {
    return (
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <Mail className="h-16 w-16 text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-500 mb-2">No Email Generated Yet</h3>
          <p className="text-gray-400 text-center">
            Fill out the form above and click "Generate Email" to see your personalized cold email here.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Mail className="h-6 w-6" />
          Email Preview
        </CardTitle>
        <CardDescription>
          Review and customize your generated email before sending
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="subject">Subject Line</Label>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy(editedSubject, 'subject')}
              className="h-8"
            >
              {copiedSubject ? (
                <Check className="h-3 w-3" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </div>
          <Input
            id="subject"
            value={editedSubject}
            onChange={(e) => setEditedSubject(e.target.value)}
            className="font-medium"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="content">Email Content</Label>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy(editedContent, 'content')}
              className="h-8"
            >
              {copiedContent ? (
                <Check className="h-3 w-3" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </div>
          <Textarea
            id="content"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="min-h-[300px] font-mono text-sm leading-relaxed"
          />
        </div>

        <div className="flex flex-col space-y-3 pt-4 border-t">
          <div className="flex gap-3">
            <Button
              onClick={handleSave}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              <Save className="mr-2 h-4 w-4" />
              Save Template
            </Button>
            <Button
              onClick={onRegenerate}
              variant="outline"
              className="flex-1"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Regenerate
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div>
              <span className="font-medium">Target:</span> {email.targetAudience}
            </div>
            <div>
              <span className="font-medium">Tone:</span> {email.tone}
            </div>
            <div className="col-span-2">
              <span className="font-medium">Product/Service:</span> {email.productService}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
