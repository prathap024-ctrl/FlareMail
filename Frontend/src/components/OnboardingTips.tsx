
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Target, MessageSquare, TrendingUp } from 'lucide-react';

export const OnboardingTips = () => {
  const tips = [
    {
      icon: Target,
      title: 'Know Your Audience',
      description: 'Research your prospect\'s company, role, and recent achievements. Personalization is key to higher response rates.',
      tip: 'Tip: Check their LinkedIn, company blog, or recent news mentions.',
    },
    {
      icon: MessageSquare,
      title: 'Keep It Concise',
      description: 'Busy professionals receive dozens of emails daily. Get to the point quickly and make every word count.',
      tip: 'Tip: Aim for 50-150 words for maximum engagement.',
    },
    {
      icon: TrendingUp,
      title: 'Strong Call-to-Action',
      description: 'End with a clear, specific ask. Make it easy for them to take the next step.',
      tip: 'Tip: "15-minute call" works better than "let\'s discuss".',
    },
  ];

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-l-blue-500">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          Cold Email Best Practices
        </CardTitle>
        <CardDescription>
          Follow these proven strategies to improve your email response rates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tips.map((tip, index) => (
            <div key={index} className="space-y-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center gap-2">
                <tip.icon className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-sm">{tip.title}</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tip.description}
              </p>
              <p className="text-xs text-blue-600 font-medium bg-blue-50 p-2 rounded">
                {tip.tip}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
