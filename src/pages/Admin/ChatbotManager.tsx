
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Plus, Search, Edit, Trash2, Tag, ExternalLink } from "lucide-react";
import AdminLayout from "./AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ChatbotEntry {
  id: string;
  question: string;
  answer: string;
  tags?: string[] | null;
  source_link?: string;
  created_at: string;
}

interface ChatbotQuery {
  id: string;
  query: string;
  answered: boolean;
  created_at: string;
}

const ChatbotManager = () => {
  const { user } = useAuth();
  
  const [entries, setEntries] = useState<ChatbotEntry[]>([]);
  const [queries, setQueries] = useState<ChatbotQuery[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("knowledge");
  const [selectedEntry, setSelectedEntry] = useState<ChatbotEntry | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [tagInput, setTagInput] = useState("");
  
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    source_link: "",
    tags: [] as string[],
  });

  const fetchKnowledge = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("chatbot_knowledge")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setEntries(data || []);
    } catch (error) {
      console.error("Error fetching chatbot knowledge:", error);
      toast.error("Failed to load chatbot knowledge");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchQueries = async () => {
    try {
      const { data, error } = await supabase
        .from("chatbot_queries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setQueries(data || []);
    } catch (error) {
      console.error("Error fetching chatbot queries:", error);
    }
  };

  useEffect(() => {
    fetchKnowledge();
    fetchQueries();
  }, []);

  const handleCreateNew = () => {
    setSelectedEntry(null);
    setFormData({
      question: "",
      answer: "",
      source_link: "",
      tags: [],
    });
    setIsDialogOpen(true);
  };

  const handleEditEntry = (entry: ChatbotEntry) => {
    setSelectedEntry(entry);
    setFormData({
      question: entry.question,
      answer: entry.answer,
      source_link: entry.source_link || "",
      tags: entry.tags || [],
    });
    setIsDialogOpen(true);
  };

  const handleDeleteClick = (entry: ChatbotEntry) => {
    setSelectedEntry(entry);
    setIsDeleteDialogOpen(true);
  };

  const handleMarkAnswered = async (query: ChatbotQuery) => {
    try {
      const { error } = await supabase
        .from("chatbot_queries")
        .update({ answered: true })
        .eq("id", query.id);

      if (error) throw error;
      
      // Update the local state
      setQueries(queries.map(q => 
        q.id === query.id ? { ...q, answered: true } : q
      ));
      
      toast.success("Query marked as answered");
    } catch (error) {
      console.error("Error updating query:", error);
      toast.error("Failed to update query");
    }
  };

  const handleAddToKnowledge = (query: ChatbotQuery) => {
    setFormData({
      question: query.query,
      answer: "",
      source_link: "",
      tags: [],
    });
    setIsDialogOpen(true);
  };

  const handleDeleteEntry = async () => {
    if (!selectedEntry) return;
    
    try {
      const { error } = await supabase
        .from("chatbot_knowledge")
        .delete()
        .eq("id", selectedEntry.id);

      if (error) throw error;
      
      toast.success("Knowledge entry deleted successfully");
      fetchKnowledge();
      setIsDeleteDialogOpen(false);
    } catch (error) {
      console.error("Error deleting entry:", error);
      toast.error("Failed to delete entry");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (selectedEntry) {
        // Update existing entry
        const { error } = await supabase
          .from("chatbot_knowledge")
          .update({
            question: formData.question,
            answer: formData.answer,
            source_link: formData.source_link || null,
            tags: formData.tags.length > 0 ? formData.tags : null,
            updated_at: new Date().toISOString(),
          })
          .eq("id", selectedEntry.id);

        if (error) throw error;
        toast.success("Knowledge entry updated successfully");
      } else {
        // Create new entry
        const { error } = await supabase
          .from("chatbot_knowledge")
          .insert({
            question: formData.question,
            answer: formData.answer,
            source_link: formData.source_link || null,
            tags: formData.tags.length > 0 ? formData.tags : null,
            created_by: user?.id,
          });

        if (error) throw error;
        toast.success("Knowledge entry created successfully");
      }
      
      setIsDialogOpen(false);
      fetchKnowledge();
    } catch (error) {
      console.error("Error saving knowledge entry:", error);
      toast.error("Failed to save entry");
    }
  };

  const filteredEntries = entries.filter(entry => 
    entry.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    entry.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (entry.tags && entry.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const unansweredQueries = queries.filter(query => !query.answered);

  return (
    <AdminLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Chatbot Manager</h1>
          <Button onClick={handleCreateNew} className="bg-ghana-green hover:bg-ghana-green/90 flex items-center gap-2">
            <Plus size={16} /> Add Knowledge
          </Button>
        </div>

        <Tabs defaultValue="knowledge" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
            <TabsTrigger value="queries">
              Unanswered Queries
              {unansweredQueries.length > 0 && (
                <Badge className="ml-2 bg-red-500">{unansweredQueries.length}</Badge>
              )}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="knowledge" className="space-y-4 pt-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search knowledge base..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-12 w-12 animate-spin text-ghana-green" />
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredEntries.length === 0 ? (
                  <Card>
                    <CardContent className="py-12 text-center text-gray-500">
                      {searchQuery ? "No entries match your search" : "No knowledge entries found. Create your first entry!"}
                    </CardContent>
                  </Card>
                ) : (
                  filteredEntries.map((entry) => (
                    <Card key={entry.id} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="grid gap-4">
                          <div>
                            <h3 className="font-medium text-lg">{entry.question}</h3>
                            <p className="text-gray-600 mt-2">{entry.answer}</p>
                          </div>
                          
                          {entry.tags && entry.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {entry.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="flex items-center gap-1">
                                  <Tag size={12} /> {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                          
                          {entry.source_link && (
                            <div className="flex items-center text-sm text-blue-600">
                              <ExternalLink size={14} className="mr-1" />
                              <a href={entry.source_link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Source
                              </a>
                            </div>
                          )}
                          
                          <div className="flex justify-end gap-2 mt-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleEditEntry(entry)}
                              className="flex items-center gap-1"
                            >
                              <Edit className="h-4 w-4" />
                              Edit
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-red-500 hover:text-red-700 flex items-center gap-1"
                              onClick={() => handleDeleteClick(entry)}
                            >
                              <Trash2 className="h-4 w-4" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="queries" className="space-y-4 pt-4">
            <div className="grid gap-4">
              {queries.filter(query => !query.answered).length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center text-gray-500">
                    No unanswered queries from users
                  </CardContent>
                </Card>
              ) : (
                queries
                  .filter(query => !query.answered)
                  .map((query) => (
                    <Card key={query.id} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="grid gap-4">
                          <div>
                            <p className="font-medium">{query.query}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(query.created_at).toLocaleString()}
                            </p>
                          </div>
                          
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleMarkAnswered(query)}
                            >
                              Mark as Answered
                            </Button>
                            <Button 
                              className="bg-ghana-green hover:bg-ghana-green/90"
                              size="sm"
                              onClick={() => handleAddToKnowledge(query)}
                            >
                              Add to Knowledge Base
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Create/Edit Knowledge Entry Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedEntry ? "Edit Knowledge Entry" : "Add Knowledge Entry"}</DialogTitle>
            <DialogDescription>
              {selectedEntry ? "Update the question and answer" : "Add a new question and answer to the chatbot knowledge base"}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="question">Question</Label>
                <Input
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="answer">Answer</Label>
                <Textarea
                  id="answer"
                  name="answer"
                  value={formData.answer}
                  onChange={handleInputChange}
                  rows={6}
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="source_link">Source Link (Optional)</Label>
                <Input
                  id="source_link"
                  name="source_link"
                  value={formData.source_link}
                  onChange={handleInputChange}
                  placeholder="https://..."
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="tags">Tags</Label>
                <div className="flex gap-2">
                  <Input
                    id="tags"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Add a tag"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                  />
                  <Button type="button" variant="secondary" onClick={handleAddTag}>Add</Button>
                </div>
                
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <button 
                          type="button" 
                          onClick={() => handleRemoveTag(tag)} 
                          className="ml-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-ghana-green hover:bg-ghana-green/90">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this knowledge entry.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteEntry} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
};

export default ChatbotManager;
