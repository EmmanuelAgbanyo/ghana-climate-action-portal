
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Facebook, Twitter, Mail, Share2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
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

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [comment, setComment] = useState({ name: "", email: "", content: "" });
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        setIsLoading(true);
        
        // Fetch the post by slug
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("slug", slug)
          .eq("status", "published")
          .single();
        
        if (error) {
          console.error("Error fetching post:", error);
          navigate("/blog", { replace: true });
          return;
        }
        
        if (!data) {
          navigate("/blog", { replace: true });
          return;
        }
        
        setPost(data);
        
        // Fetch related posts in same category
        if (data.category) {
          const { data: relatedData, error: relatedError } = await supabase
            .from("posts")
            .select("*")
            .eq("status", "published")
            .eq("category", data.category)
            .neq("id", data.id)
            .limit(3);
            
          if (!relatedError && relatedData) {
            setRelatedPosts(relatedData);
          }
        }
      } catch (err) {
        console.error("Error processing blog post:", err);
        navigate("/blog", { replace: true });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPost();
  }, [slug, navigate]);
  
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  
  const handleCommentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setComment((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to API
    alert("Thank you for your comment! It will be reviewed and published soon.");
    setComment({ name: "", email: "", content: "" });
  };
  
  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center py-32">
          <Loader2 className="h-12 w-12 animate-spin text-ghana-green" />
        </div>
      </Layout>
    );
  }
  
  if (!post) {
    return null;
  }

  return (
    <Layout>
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <Button 
            variant="outline"
            className="mb-8 flex items-center gap-2"
            onClick={() => navigate("/blog")}
          >
            <ArrowLeft size={16} /> Back to Blog
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="h-80 bg-gray-200">
                  <img 
                    src={post.cover_image || "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80";
                    }}
                  />
                </div>
                
                <CardContent className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {post.category && (
                      <Badge className="bg-ghana-green hover:bg-ghana-green/80">
                        {post.category}
                      </Badge>
                    )}
                    <span className="text-sm text-gray-500">{formatDate(post.published_at || post.created_at)}</span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-ghana-green rounded-full"></div>
                    <div>
                      <p className="font-medium">Admin</p>
                      <p className="text-sm text-gray-500">Climate Information Centre</p>
                    </div>
                  </div>
                  
                  <div 
                    className="prose max-w-none mb-8"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  <Separator className="my-8" />
                  
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <p className="text-sm font-medium mb-2">Tags:</p>
                      <div>
                        {post.category && (
                          <Badge 
                            variant="outline"
                            className="mr-2"
                          >
                            {post.category}
                          </Badge>
                        )}
                        <Badge variant="outline" className="mr-2">Climate</Badge>
                        <Badge variant="outline" className="mr-2">Ghana</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Share:</p>
                      <div className="flex gap-3">
                        <Button size="icon" variant="outline">
                          <Facebook size={18} />
                        </Button>
                        <Button size="icon" variant="outline">
                          <Twitter size={18} />
                        </Button>
                        <Button size="icon" variant="outline">
                          <Mail size={18} />
                        </Button>
                        <Button size="icon" variant="outline">
                          <Share2 size={18} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-8 p-8">
                <h3 className="text-2xl font-bold mb-6">Leave a Comment</h3>
                <form onSubmit={handleCommentSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={comment.name} 
                        onChange={handleCommentChange} 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={comment.email} 
                        onChange={handleCommentChange} 
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium mb-2">Comment *</label>
                    <Textarea 
                      id="content" 
                      name="content" 
                      rows={5} 
                      value={comment.content} 
                      onChange={handleCommentChange} 
                      required 
                    />
                  </div>
                  <Button type="submit" className="bg-ghana-green hover:bg-ghana-green/90">
                    Submit Comment
                  </Button>
                </form>
              </Card>
            </div>
            
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex gap-3">
                        <div className="w-20 h-20 bg-gray-200 flex-shrink-0">
                          {relatedPost.cover_image && (
                            <img 
                              src={relatedPost.cover_image} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "https://placehold.co/80x80?text=CIC";
                              }}
                            />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium mb-1 hover:text-ghana-green transition-colors">
                            <a href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</a>
                          </h4>
                          <p className="text-sm text-gray-500">
                            {formatDate(relatedPost.published_at || relatedPost.created_at)}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No related posts found</p>
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
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
