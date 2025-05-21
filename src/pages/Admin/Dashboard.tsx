
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import AdminLayout from "./AdminLayout";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// Sample chart data (will be replaced with real data)
const chartData = [
  { name: "Jan", visitors: 1200, blogViews: 800 },
  { name: "Feb", visitors: 1400, blogViews: 1000 },
  { name: "Mar", visitors: 1600, blogViews: 1200 },
  { name: "Apr", visitors: 1800, blogViews: 1400 },
  { name: "May", visitors: 2000, blogViews: 1600 },
];

const Dashboard = () => {
  const { user, isAdmin } = useAuth();
  const [posts, setPosts] = useState<any[]>([]);
  const [chatbotQueries, setChatbotQueries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true);
      
      try {
        // Fetch latest posts
        const { data: postsData, error: postsError } = await supabase
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(4);
        
        if (postsError) throw postsError;
        setPosts(postsData || []);
        
        // Fetch unanswered chatbot queries
        const { data: queriesData, error: queriesError } = await supabase
          .from('chatbot_queries')
          .select('*')
          .eq('answered', false)
          .order('created_at', { ascending: false })
          .limit(5);
        
        if (queriesError) throw queriesError;
        setChatbotQueries(queriesData || []);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchDashboardData();
  }, [user]);
  
  return (
    <AdminLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex gap-3">
            <Button variant="outline">Refresh Data</Button>
            <Button className="bg-ghana-green hover:bg-ghana-green/90">Download Report</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-ghana-green">3,452</div>
              <p className="text-sm text-gray-500">Total Visitors This Month</p>
              <div className="text-sm text-green-600 mt-2">↑ 12% from last month</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-ghana-green">{posts.length}</div>
              <p className="text-sm text-gray-500">Blog Posts Published</p>
              <div className="text-sm text-green-600 mt-2">↑ 5 new this month</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-ghana-green">842</div>
              <p className="text-sm text-gray-500">Newsletter Subscribers</p>
              <div className="text-sm text-green-600 mt-2">↑ 45 new subscribers</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-ghana-green">{chatbotQueries.length}</div>
              <p className="text-sm text-gray-500">Chatbot Queries</p>
              <div className="text-sm text-green-600 mt-2">↑ 18% engagement rate</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="col-span-1">
            <CardHeader className="pb-0">
              <CardTitle>Website Traffic</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="visitors" fill="#1E5631" name="Visitors" />
                  <Bar dataKey="blogViews" fill="#FDD023" name="Blog Views" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-ghana-green border-t-transparent"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  {posts.slice(0, 5).map((post, i) => (
                    <div key={i}>
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">New post: {post.title}</p>
                          <p className="text-sm text-gray-500">{post.status === 'published' ? 'Published' : 'Draft'}</p>
                        </div>
                        <span className="text-xs text-gray-500">
                          {new Date(post.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      {i < 4 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="col-span-3 md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-ghana-green border-t-transparent"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  {posts.map((post, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{post.title}</p>
                        <div className="flex gap-3 text-sm text-gray-500">
                          <span>{post.status}</span>
                          <span>•</span>
                          <span>{new Date(post.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="text-sm">{post.views || 0} views</span>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Chatbot Queries</CardTitle>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm">View All</Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[400px] sm:w-[540px]">
                    <SheetHeader>
                      <SheetTitle>Unanswered Chatbot Queries</SheetTitle>
                      <SheetDescription>
                        These are questions that users have asked the chatbot but didn't receive satisfactory answers.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="mt-6 space-y-4">
                      {chatbotQueries.map((query, i) => (
                        <Card key={i}>
                          <CardContent className="p-4">
                            <p className="font-medium">{query.query}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(query.created_at).toLocaleString()}
                            </p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="default" size="sm" className="bg-ghana-green hover:bg-ghana-green/90">
                                Add to Knowledge Base
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-ghana-green border-t-transparent"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Top Questions</p>
                    <ol className="list-decimal pl-5 text-sm text-gray-600 mt-2 space-y-2">
                      {chatbotQueries.slice(0, 5).map((query, i) => (
                        <li key={i}>{query.query}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <p className="text-sm font-medium">Satisfaction Rate</p>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Answered Queries</span>
                        <span>68%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-ghana-green rounded-full" style={{ width: "68%" }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-ghana-green hover:bg-ghana-green/90">
                    Update Chatbot Knowledge
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
