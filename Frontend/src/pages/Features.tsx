
import { ArrowLeft, Check, Mail, Zap, Users, BarChart3, Shield, Clock, RefreshCw, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Generation",
      description: "Advanced AI algorithms create personalized, high-converting cold emails tailored to your specific needs and target audience."
    },
    {
      icon: Users,
      title: "Audience Targeting",
      description: "Customize emails for different industries, roles, and personas to maximize relevance and response rates."
    },
    {
      icon: BarChart3,
      title: "Performance Optimized",
      description: "Templates based on proven cold email strategies that consistently deliver higher open and response rates."
    },
    {
      icon: Clock,
      title: "Save Hours Daily",
      description: "Generate professional cold emails in seconds instead of spending hours crafting each message manually."
    },
    {
      icon: RefreshCw,
      title: "Multiple Variations",
      description: "Generate multiple versions of the same email to test different approaches and find what works best."
    },
    {
      icon: Copy,
      title: "Easy Copy & Use",
      description: "One-click copying to your clipboard makes it simple to use generated emails in your preferred email client."
    },
    {
      icon: Shield,
      title: "Professional Quality",
      description: "Every generated email maintains professional standards while being engaging and conversion-focused."
    },
    {
      icon: Mail,
      title: "Template Library",
      description: "Save and organize your best-performing emails in a personal library for future reference and reuse."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cold Email Generator
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Link to="/generator">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Powerful Features for Better Cold Emails
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to create, customize, and optimize cold emails that get results. 
          Our AI-powered platform makes professional outreach accessible to everyone.
        </p>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Generate professional cold emails in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Fill the Form</h3>
              <p className="text-gray-600">
                Enter your product/service details, target audience, and preferred tone
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Generation</h3>
              <p className="text-gray-600">
                Our AI creates a personalized, professional cold email tailored to your needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Copy & Send</h3>
              <p className="text-gray-600">
                Review, customize if needed, and copy your email to start connecting with prospects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start generating high-converting cold emails today with our powerful AI platform.
          </p>
          <Link to="/generator">
            <Button size="lg" className="text-lg px-8 py-3">
              Try It Free Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;
