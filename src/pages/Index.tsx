
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  // Blog post data with images
  const blogPosts = [
    {
      id: 1,
      title: "Ghana's Progress on NDC Implementation",
      excerpt: "Learn about Ghana's efforts in meeting its Nationally Determined Contributions under the Paris Agreement.",
      date: "May 21, 2025",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 2,
      title: "Climate-Smart Agriculture Initiatives",
      excerpt: "Discover how Ghanaian farmers are adapting to changing climate conditions with innovative techniques.",
      date: "May 15, 2025",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 3,
      title: "Youth Climate Leadership Summit",
      excerpt: "Recap of the recent summit where young Ghanaians presented solutions to climate challenges.",
      date: "May 8, 2025",
      image: "https://images.unsplash.com/photo-1577368211130-4bbb64707ee3?auto=format&fit=crop&q=80&w=600&h=400"
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Climate Information Centre - Ghana"
        subtitle="Empowering Ghanaians with knowledge for climate action and resilience"
        backgroundImage="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1920&h=1080"
        buttonText="Learn More"
        buttonLink="/about"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Climate Information" 
            subtitle="Stay informed about Ghana's climate challenges and adaptation strategies"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Climate Change in Ghana</CardTitle>
                <CardDescription>Understanding the local impacts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Ghana faces rising temperatures, changing rainfall patterns, and sea level rise that affect agriculture, water resources, and coastal communities.</p>
                <Button variant="link" className="text-ghana-green flex items-center gap-2" asChild>
                  <a href="/climate-info">
                    Learn More <ArrowRight size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Adaptation Strategies</CardTitle>
                <CardDescription>Building resilience together</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Explore Ghana's national adaptation plans, agricultural innovations, coastal protection measures, and sustainable water management.</p>
                <Button variant="link" className="text-ghana-green flex items-center gap-2" asChild>
                  <a href="/adaptation">
                    Learn More <ArrowRight size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Resilient Leadership</CardTitle>
                <CardDescription>Guiding Ghana's climate action</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Learn about Ghana's climate policies, international commitments, and the leaders driving meaningful change in our communities.</p>
                <Button variant="link" className="text-ghana-green flex items-center gap-2" asChild>
                  <a href="/leadership">
                    Learn More <ArrowRight size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Latest from Our Blog" 
            subtitle="Stay updated with the latest news and insights"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="card-hover overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="link" className="text-ghana-green p-0 flex items-center gap-2" asChild>
                    <a href={`/blog/${post.id}`}>
                      Read More <ArrowRight size={16} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-ghana-green hover:bg-ghana-green/90" asChild>
              <a href="/blog">View All Posts</a>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="page-container">
        <div className="bg-ghana-green text-white rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ask ClimateWise</h2>
              <p className="text-lg opacity-90">
                Have questions about Ghana's climate policies or adaptation strategies? Our AI assistant is here to help you find answers.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-ghana-gold text-ghana-green hover:bg-yellow-400"
            >
              Chat with ClimateWise
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
