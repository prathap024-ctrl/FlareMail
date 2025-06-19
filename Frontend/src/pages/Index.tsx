import { useState } from 'react';
import { Header } from '@/components/Header';
import { EmailForm } from '@/components/EmailForm';
import { EmailPreview } from '@/components/EmailPreview';
import { HistoryPanel } from '@/components/HistoryPanel';
import { OnboardingTips } from '@/components/OnboardingTips';
import { Footer } from '@/components/Footer';

export interface GeneratedEmail {
  id: string;
  subject: string;
  content: string;
  targetAudience: string;
  productService: string;
  tone: string;
  cta: string;
  timestamp: Date;
  isFavorite: boolean;
}

const Index = () => {
  const [generatedEmail, setGeneratedEmail] = useState<GeneratedEmail | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [savedEmails, setSavedEmails] = useState<GeneratedEmail[]>([
    {
      id: '1',
      subject: 'Transform Your Marketing Strategy',
      content: `Hi [Name],

I hope this email finds you well. I noticed your company has been making impressive strides in the digital marketing space.

At [Company], we've helped businesses like yours increase their conversion rates by up to 40% through our innovative email automation platform.

Would you be interested in a 15-minute call next week to explore how we can help streamline your marketing efforts?

Best regards,
[Your Name]`,
      targetAudience: 'Marketing Managers',
      productService: 'Email Automation Platform',
      tone: 'Professional',
      cta: 'Schedule a 15-minute call',
      timestamp: new Date('2024-06-18'),
      isFavorite: true,
    },
    {
      id: '2',
      subject: 'Quick Question About Your Sales Process',
      content: `Hey [Name],

Love what you're doing at [Company]! Your recent LinkedIn post about sales optimization really resonated with me.

I've been working with similar companies to yours, helping them cut their sales cycle by 30% using our CRM integration tool.

Mind if I share a quick 3-minute demo that shows exactly how this works?

Cheers,
[Your Name]`,
      targetAudience: 'Sales Directors',
      productService: 'CRM Integration Tool',
      tone: 'Friendly',
      cta: 'View 3-minute demo',
      timestamp: new Date('2024-06-17'),
      isFavorite: false,
    },
  ]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleGenerateEmail = async (formData: any) => {
    setIsGenerating(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newEmail: GeneratedEmail = {
      id: Date.now().toString(),
      subject: generateMockSubject(formData),
      content: generateMockContent(formData),
      targetAudience: formData.targetAudience,
      productService: formData.productService,
      tone: formData.tone,
      cta: formData.cta,
      timestamp: new Date(),
      isFavorite: false,
    };
    
    setGeneratedEmail(newEmail);
    setIsGenerating(false);
  };

  const generateMockSubject = (formData: any) => {
    const subjects = {
      'Friendly': `Hey! Quick question about ${formData.productService}`,
      'Professional': `Optimize Your Business with ${formData.productService}`,
      'Bold': `🚀 Ready to 10x Your Results with ${formData.productService}?`,
    };
    return subjects[formData.tone as keyof typeof subjects] || 'Subject Line';
  };

  const generateMockContent = (formData: any) => {
    const greetings = {
      'Friendly': 'Hey [Name],',
      'Professional': 'Dear [Name],',
      'Bold': 'Hi [Name]!',
    };

    const intros = {
      'Friendly': "Hope you're having a great day! I came across your profile and was impressed by your work.",
      'Professional': "I hope this email finds you well. I've been following your company's progress with great interest.",
      'Bold': "I'll cut straight to the chase - what you're doing is impressive, and I think we can make it even better!",
    };

    const pitches = {
      'Friendly': `We've been helping ${formData.targetAudience.toLowerCase()} like yourself with our ${formData.productService.toLowerCase()}, and the results have been pretty amazing.`,
      'Professional': `Our ${formData.productService} has consistently delivered exceptional results for ${formData.targetAudience.toLowerCase()}, with an average improvement of 35% in key metrics.`,
      'Bold': `Our ${formData.productService} is literally changing the game for ${formData.targetAudience.toLowerCase()} - we're talking serious, measurable results!`,
    };

    const closings = {
      'Friendly': `Would love to chat more about this. ${formData.cta}?`,
      'Professional': `I would welcome the opportunity to discuss how we can support your objectives. ${formData.cta}.`,
      'Bold': `Ready to see what this can do for you? ${formData.cta} - you won't regret it!`,
    };

    const signOffs = {
      'Friendly': 'Cheers,\n[Your Name]',
      'Professional': 'Best regards,\n[Your Name]',
      'Bold': 'Talk soon,\n[Your Name]',
    };

    return `${greetings[formData.tone]}

${intros[formData.tone]}

${pitches[formData.tone]}

${closings[formData.tone]}

${signOffs[formData.tone]}`;
  };

  const handleSaveEmail = (email: GeneratedEmail) => {
    setSavedEmails(prev => [email, ...prev]);
  };

  const handleToggleFavorite = (id: string) => {
    setSavedEmails(prev => prev.map(email => 
      email.id === id ? { ...email, isFavorite: !email.isFavorite } : email
    ));
  };

  const handleDeleteEmail = (id: string) => {
    setSavedEmails(prev => prev.filter(email => email.id !== id));
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <Header isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <OnboardingTips />
            <EmailForm onGenerate={handleGenerateEmail} isGenerating={isGenerating} />
            <EmailPreview 
              email={generatedEmail} 
              onSave={handleSaveEmail}
              onRegenerate={() => handleGenerateEmail({})}
            />
          </div>
          
          <div className="lg:col-span-1">
            <HistoryPanel 
              emails={savedEmails}
              onToggleFavorite={handleToggleFavorite}
              onDelete={handleDeleteEmail}
            />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
