
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
import { Search, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "../data/blogData";
import { BlogPost } from "../types/blog";

const Blog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  
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
  useEffect(() => {
    let filtered = [...blogPosts];
    
    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(post => 
        post.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    setFilteredPosts(filtered);
    
    // Update URL with filters
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
        title="Climate Blog"
        subtitle="News, insights, and stories about climate action in Ghana"
      />
      
      <section className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SectionTitle 
              title="Latest Articles" 
              subtitle={
                filteredPosts.length === blogPosts.length 
                  ? "Stay informed with our latest climate updates"
                  : filteredPosts.length === 0
                    ? "No articles found matching your search criteria"
                    : `Showing ${filteredPosts.length} ${filteredPosts.length === 1 ? 'article' : 'articles'}`
              }
              align="left"
            />
            
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="h-60 md:h-full bg-gray-200">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-ghana-green hover:bg-ghana-green/80">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{formatDate(post.publishedAt)}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3">
                        <a 
                          href={`/blog/${post.slug}`}
                          className="hover:text-ghana-green transition-colors"
                        >
                          {post.title}
                        </a>
                      </h3>
                      
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-ghana-green rounded-full"></div>
                          <span className="text-sm font-medium">{post.author}</span>
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
              ))}
            </div>
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
                {blogCategories.map((category) => (
                  <Button 
                    key={category.slug}
                    variant={selectedCategory === category.slug ? "secondary" : "outline"}
                    className="mr-2 mb-2"
                    onClick={() => handleCategoryClick(category.slug)}
                  >
                    {category.name}
                  </Button>
                ))}
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
