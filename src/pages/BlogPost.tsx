
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Facebook, Twitter, Mail, Share2 } from "lucide-react";
import { getBlogPostBySlug } from "../data/blogData";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState(slug ? getBlogPostBySlug(slug) : null);
  const [comment, setComment] = useState({ name: "", email: "", content: "" });
  
  useEffect(() => {
    if (slug) {
      const foundPost = getBlogPostBySlug(slug);
      setPost(foundPost);
      
      if (!foundPost) {
        // Post not found, redirect to blog list
        navigate("/blog", { replace: true });
      }
    }
  }, [slug, navigate]);
  
  const formatDate = (dateString: string) => {
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
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardContent className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge className="bg-ghana-green hover:bg-ghana-green/80">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{formatDate(post.publishedAt)}</span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-ghana-green rounded-full"></div>
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.authorRole}</p>
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
                        {post.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline"
                            className="mr-2"
                          >
                            {tag}
                          </Badge>
                        ))}
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
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-20 h-20 bg-gray-200 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium mb-1 hover:text-ghana-green transition-colors">
                          <a href="#">Climate Resilience in Coastal Communities</a>
                        </h4>
                        <p className="text-sm text-gray-500">May 10, 2025</p>
                      </div>
                    </div>
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
