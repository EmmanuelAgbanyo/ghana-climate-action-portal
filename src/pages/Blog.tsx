
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { BlogPost } from "../types/blog";
import { supabase } from "@/integrations/supabase/client";

interface SupabaseBlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  status: string;
  created_at: string;
  published_at?: string;
  category?: string;
  author_id: string;
  cover_image?: string;
}

const Blog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [posts, setPosts] = useState<SupabaseBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Fetch posts from Supabase
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        console.log("Fetching posts from Supabase...");
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("status", "published")
          .order("published_at", { ascending: false });

        if (error) {
          console.error("Error fetching posts:", error);
          throw error;
        }
        
        console.log("Fetched posts:", data);
        setPosts(data || []);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        toast.error("Failed to load blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Parse URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");
    const query = searchParams.get("search");
    
    if (category) {
      setSelectedCategory(category);
    }
    
    if (query) {
      setSearchQuery(query);
    }
  }, [location.search]);
  
  // Filter posts based on search and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || 
      (post.category && post.category.toLowerCase() === selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });
  
  // Update URL with filters
  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (searchQuery) searchParams.set("search", searchQuery);
    if (selectedCategory) searchParams.set("category", selectedCategory);
    
    const newSearch = searchParams.toString();
    if (newSearch) {
      navigate(`/blog?${newSearch}`, { replace: true });
    } else if (location.search) {
      navigate("/blog", { replace: true });
    }
  }, [searchQuery, selectedCategory, navigate, location.search]);
  
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? "" : category);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The effect will handle the filtering and URL update
  };
  
  const formatDate = (dateString: string) => {
    if (!dateString) return "No date";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  // Extract unique categories from posts
  const availableCategories = Array.from(
    new Set(posts.filter(post => post.category).map(post => post.category))
  );

  console.log("Available categories:", availableCategories);
  console.log("Filtered posts:", filteredPosts);

  return (
    <Layout>
      <HeroSection
        title="Climate Blog"
        subtitle="News, insights, and stories about climate action in Ghana"
      />
      
      <section className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SectionTitle 
              title="Latest Articles" 
              subtitle={
                isLoading ? "Loading articles..." :
                filteredPosts.length === 0 ? "No articles found matching your search criteria" :
                `Showing ${filteredPosts.length} ${filteredPosts.length === 1 ? 'article' : 'articles'}`
              }
              align="left"
            />
            
            {isLoading ? (
              <div className="flex justify-center py-16">
                <Loader2 className="h-12 w-12 animate-spin text-ghana-green" />
              </div>
            ) : (
              <div className="space-y-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="h-60 md:h-full bg-gray-200">
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
                        <div className="md:col-span-2 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            {post.category && (
                              <Badge className="bg-ghana-green hover:bg-ghana-green/80">
                                {post.category}
                              </Badge>
                            )}
                            <span className="text-sm text-gray-500">
                              {formatDate(post.published_at || post.created_at)}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-3">
                            <a 
                              href={`/blog/${post.slug}`}
                              className="hover:text-ghana-green transition-colors"
                            >
                              {post.title}
                            </a>
                          </h3>
                          
                          <p className="text-gray-600 mb-4">{post.excerpt || post.content.substring(0, 150) + "..."}</p>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-ghana-green rounded-full"></div>
                              <span className="text-sm font-medium">Admin</span>
                            </div>
                            
                            <Button variant="link" className="text-ghana-green flex items-center gap-2 p-0" asChild>
                              <a href={`/blog/${post.slug}`}>
                                Read More <ArrowRight size={16} />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No posts found matching your criteria.</p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Search Articles</h3>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search blog posts..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                {availableCategories.length > 0 ? (
                  availableCategories.map((category) => (
                    category && (
                      <Button 
                        key={category}
                        variant={selectedCategory === category ? "secondary" : "outline"}
                        className="mr-2 mb-2"
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                      </Button>
                    )
                  ))
                ) : (
                  <p className="text-gray-500">No categories available</p>
                )}
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
              <div>
                {["Climate Policy", "Adaptation", "Ghana", "NDCs", "Agriculture", "Youth", "Coastal", "Renewable Energy"].map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="mr-2 mb-2 cursor-pointer hover:bg-ghana-green hover:text-white"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to get the latest climate news and updates delivered to your inbox.</p>
              <form className="space-y-4">
                <Input placeholder="Your email address" type="email" />
                <Button className="w-full bg-ghana-green hover:bg-ghana-green/90">Subscribe</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
