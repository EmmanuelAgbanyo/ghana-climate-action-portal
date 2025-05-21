
import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Layout>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with the Climate Information Centre - Ghana"
      />
      
      <section className="page-container">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            title="Get in Touch" 
            subtitle="We'd love to hear from you"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 bg-ghana-green/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-ghana-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-500 mb-4">Send us an email anytime</p>
              <p className="text-ghana-green font-medium">info@cic-ghana.org</p>
              <p className="text-ghana-green font-medium">support@cic-ghana.org</p>
            </Card>
            
            <Card className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 bg-ghana-green/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-ghana-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-500 mb-4">Call us during business hours</p>
              <p className="text-ghana-green font-medium">+233 30 123 4567</p>
              <p className="text-ghana-green font-medium">+233 20 987 6543</p>
            </Card>
            
            <Card className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 bg-ghana-green/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-ghana-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit</h3>
              <p className="text-gray-500 mb-4">Our office location</p>
              <p className="text-ghana-green font-medium">123 Climate Street</p>
              <p className="text-ghana-green font-medium">Accra, Ghana</p>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-ghana-green hover:bg-ghana-green/90">
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
            
            <div>
              <Card className="p-6 mb-8">
                <h3 className="text-2xl font-bold mb-6">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-ghana-green" />
                    <div>
                      <p className="font-medium">Monday - Friday</p>
                      <p className="text-gray-500">8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-ghana-green" />
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-gray-500">9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-ghana-green" />
                    <div>
                      <p className="font-medium">Sunday</p>
                      <p className="text-gray-500">Closed</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6">Map Location</h3>
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Map would be embedded here</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
