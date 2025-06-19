
import { ArrowLeft, Mail, Users, Target, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const About = () => {
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
          About Cold Email Generator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to democratize effective cold email outreach by making professional, 
          high-converting emails accessible to everyone through the power of artificial intelligence.
        </p>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Cold email outreach is one of the most effective ways to grow a business, but crafting 
                compelling emails that actually get responses requires skill, time, and experience that 
                many professionals simply don't have.
              </p>
              <p className="text-lg text-gray-600">
                We built Cold Email Generator to level the playing field. Our AI-powered platform 
                combines proven cold email strategies with advanced natural language processing to 
                help anyone create professional, personalized emails that convert.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                  <div className="text-gray-600">Emails Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">5,000+</div>
                  <div className="text-gray-600">Happy Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <div className="text-gray-600">Avg. Response Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Human-Centered</CardTitle>
                <CardDescription>
                  We believe in authentic, human connections. Our AI enhances your voice, 
                  it doesn't replace it.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Results-Focused</CardTitle>
                <CardDescription>
                  Every feature is designed with one goal in mind: helping you get better 
                  responses from your cold emails.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Continuously Improving</CardTitle>
                <CardDescription>
                  We're constantly learning from user feedback and email performance data 
                  to make our platform better.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg mb-6">
              Cold Email Generator was born out of frustration. Our founder, a sales professional, 
              was spending hours every week crafting cold emails, only to see mediocre response rates. 
              Despite following best practices and studying successful templates, something was missing.
            </p>
            <p className="text-lg mb-6">
              The breakthrough came when we realized that the most effective cold emails weren't just 
              following templates—they were deeply personalized and contextually relevant. But achieving 
              this level of customization at scale seemed impossible without a team of expert copywriters.
            </p>
            <p className="text-lg mb-6">
              That's when we turned to AI. By training our models on thousands of high-performing cold 
              emails and combining them with proven psychological triggers and sales principles, we created 
              a system that could generate personalized, effective emails at scale.
            </p>
            <p className="text-lg">
              Today, Cold Email Generator helps thousands of professionals, entrepreneurs, and sales teams 
              create better cold emails. We're proud to be part of their success stories and committed to 
              continuing our mission of making effective outreach accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Become part of a growing community of professionals who are transforming their cold email results.
          </p>
          <Link to="/generator">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
