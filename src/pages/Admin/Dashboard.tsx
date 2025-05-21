
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const chartData = [
  { name: "Jan", visitors: 1200, blogViews: 800 },
  { name: "Feb", visitors: 1400, blogViews: 1000 },
  { name: "Mar", visitors: 1600, blogViews: 1200 },
  { name: "Apr", visitors: 1800, blogViews: 1400 },
  { name: "May", visitors: 2000, blogViews: 1600 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  
  // This would be replaced by an actual auth check in a real app
  useEffect(() => {
    // Check if user is logged in (simulated)
    const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);
  
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
              <div className="text-3xl font-bold text-ghana-green">27</div>
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
              <div className="text-3xl font-bold text-ghana-green">125</div>
              <p className="text-sm text-gray-500">Chatbot Conversations</p>
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
              <div className="space-y-4">
                {[
                  { action: "New post published", details: "Climate-Smart Agriculture Success in Northern Ghana", time: "10 minutes ago" },
                  { action: "Comment received", details: "on 'Ghana's Progress on NDC Implementation'", time: "35 minutes ago" },
                  { action: "Newsletter sent", details: "May 2025 Climate Updates", time: "2 hours ago" },
                  { action: "User registration", details: "New admin user added", time: "Yesterday" },
                  { action: "Chatbot data updated", details: "Added new climate policy information", time: "Yesterday" },
                ].map((activity, i) => (
                  <div key={i}>
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-500">{activity.details}</p>
                      </div>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                    {i < 4 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="col-span-3 md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Ghana's Progress on NDC Implementation", status: "Published", date: "May 15, 2025", views: 245 },
                  { title: "Climate-Smart Agriculture Success in Northern Ghana", status: "Published", date: "May 10, 2025", views: 182 },
                  { title: "Youth Climate Advocates Launch Urban Tree Planting Campaign", status: "Published", date: "May 5, 2025", views: 136 },
                  { title: "Coastal Communities Adaptation Workshop Series", status: "Draft", date: "Not published", views: 0 },
                ].map((post, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{post.title}</p>
                      <div className="flex gap-3 text-sm text-gray-500">
                        <span>{post.status}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-sm">{post.views} views</span>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Chatbot Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Top Questions</p>
                  <ol className="list-decimal pl-5 text-sm text-gray-600 mt-2 space-y-2">
                    <li>What are Ghana's climate policies?</li>
                    <li>How does climate change affect agriculture?</li>
                    <li>What is Ghana's NDC commitment?</li>
                    <li>How can I join climate initiatives?</li>
                    <li>What are adaptation strategies?</li>
                  </ol>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm font-medium">Satisfaction Rate</p>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Positive responses</span>
                      <span>82%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-ghana-green rounded-full" style={{ width: "82%" }}></div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-ghana-green hover:bg-ghana-green/90">
                  Update Chatbot Knowledge
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
