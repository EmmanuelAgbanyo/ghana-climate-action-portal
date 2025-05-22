
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  cover_image?: string;
  published_at?: string;
  created_at: string;
}

const Index = () => {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch latest published posts
  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select("id, title, slug, excerpt, cover_image, published_at, created_at")
          .eq("status", "published")
          .order("published_at", { ascending: false })
          .limit(3);

        if (error) throw error;
        setFeaturedPosts(data || []);
      } catch (err) {
        console.error("Error fetching posts for homepage:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestPosts();
  }, []);

  // Format date to readable string
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <Layout>
      <HeroSection
        title="Climate Information Centre - Ghana"
        subtitle="Empowering Ghanaians with knowledge for climate action and resilience"
        backgroundImage="https://images.unsplash.com/photo-1542601600647-3a722a90a76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080"
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
                <div className="mb-4 h-44 overflow-hidden rounded-md">
                  <img 
                    src="https://images.unsplash.com/photo-1584969260276-aa34586e3e75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400" 
                    alt="Climate change impacts" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
                <div className="mb-4 h-44 overflow-hidden rounded-md">
                  <img 
                    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400" 
                    alt="Adaptation strategies" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
                <div className="mb-4 h-44 overflow-hidden rounded-md">
                  <img 
                    src="https://images.unsplash.com/photo-1577368211130-4bbb64707ee3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400" 
                    alt="Climate leadership" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
            {isLoading ? (
              Array(3).fill(0).map((_, index) => (
                <Card key={index} className="card-hover overflow-hidden">
                  <div className="h-48 bg-gray-300 animate-pulse"></div>
                  <CardContent className="pt-6">
                    <div className="h-4 bg-gray-300 animate-pulse mb-2"></div>
                    <div className="h-8 bg-gray-300 animate-pulse mb-2"></div>
                    <div className="h-16 bg-gray-300 animate-pulse mb-4"></div>
                    <div className="h-4 bg-gray-300 animate-pulse w-1/3"></div>
                  </CardContent>
                </Card>
              ))
            ) : featuredPosts.length > 0 ? (
              featuredPosts.map((post) => (
                <Card key={post.id} className="card-hover overflow-hidden">
                  <div className="h-48 bg-gray-200">
                    <img 
                      src={post.cover_image || "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-sm text-gray-500 mb-2">{formatDate(post.published_at || post.created_at)}</p>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt || post.title}</p>
                    <Button variant="link" className="text-ghana-green p-0 flex items-center gap-2" asChild>
                      <a href={`/blog/${post.slug}`}>
                        Read More <ArrowRight size={16} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="lg:col-span-3 text-center py-8">
                <p>No published blog posts available yet.</p>
                <Button className="mt-4 bg-ghana-green hover:bg-ghana-green/90" asChild>
                  <a href="/blog">Visit Blog</a>
                </Button>
              </div>
            )}
          </div>
          
          {featuredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button className="bg-ghana-green hover:bg-ghana-green/90" asChild>
                <a href="/blog">View All Posts</a>
              </Button>
            </div>
          )}
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
      
      {/* Partner section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Partners" 
            subtitle="Working together for climate resilience in Ghana"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mt-8">
            <div className="flex justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/United_Nations_Emblem_blue.svg/1024px-United_Nations_Emblem_blue.svg.png" 
                alt="United Nations" 
                className="h-16 md:h-24 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://unfccc.int/themes/custom/unfccc/dist/img/new-un-climatechange-logo.png" 
                alt="UNFCCC" 
                className="h-16 md:h-24 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG-Logo-2019.png" 
                alt="Sustainable Development Goals" 
                className="h-16 md:h-24 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://www.gh.undp.org/etc.clientlibs/undp/clientlibs/clientlib-site/resources/images/undp-logo-blue.svg" 
                alt="UNDP" 
                className="h-16 md:h-24 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
