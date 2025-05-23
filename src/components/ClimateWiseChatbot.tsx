
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageSquare, X, Send } from "lucide-react";

interface Message {
  id: number;
  type: "user" | "bot";
  text: string;
  timestamp: Date;
}

const ClimateWiseChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      type: "bot", 
      text: "Hello! I'm ClimateWise, your guide to Ghana's climate action. Ask me about NDCs, adaptation strategies, or how you can get involved!", 
      timestamp: new Date() 
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Load chatbot state from localStorage on mount
  useEffect(() => {
    const storedState = localStorage.getItem('chatbotOpen') === 'true';
    setIsOpen(storedState);
    
    // Listen for toggle events from Header component
    const handleToggle = () => {
      const newState = localStorage.getItem('chatbotOpen') === 'true';
      setIsOpen(newState);
    };
    
    window.addEventListener('chatbotToggle', handleToggle);
    
    return () => {
      window.removeEventListener('chatbotToggle', handleToggle);
    };
  }, []);
  
  // Save chatbot state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('chatbotOpen', isOpen.toString());
  }, [isOpen]);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem('chatbotOpen', newState.toString());
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (inputValue.trim()) {
      // Add user message
      const newMessage: Message = {
        id: messages.length + 1,
        type: "user",
        text: inputValue,
        timestamp: new Date()
      };
      
      setMessages([...messages, newMessage]);
      setInputValue("");
      
      // Simulate bot response after a short delay
      setTimeout(() => {
        const botResponse = getBotResponse(inputValue);
        
        const botMessage: Message = {
          id: messages.length + 2,
          type: "bot",
          text: botResponse,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    }
  };

  // Expanded bot responses
  const getBotResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("ndc") || lowerInput.includes("nationally determined")) {
      return "Ghana's updated Nationally Determined Contributions (NDCs) aim to reduce greenhouse gas emissions by 64 million tonnes by 2030. This represents a 15% reduction compared to business-as-usual scenario. The NDCs include 47 adaptation and mitigation measures across 19 policy areas, including renewable energy, sustainable agriculture, and forest conservation.";
    }
    
    if (lowerInput.includes("adaptation") || lowerInput.includes("adapt")) {
      return "Ghana's adaptation strategies focus on key sectors including agriculture, water resources, coastal zone management, health, and infrastructure. Specific measures include climate-smart agriculture, improved water management, coastal protection, and climate-resilient infrastructure. The National Adaptation Plan (NAP) provides a framework for implementing these strategies across all regions of Ghana.";
    }
    
    if (lowerInput.includes("involve") || lowerInput.includes("participate") || lowerInput.includes("volunteer")) {
      return "You can get involved in climate action in Ghana through various ways: 1) Join local environmental groups like Green Accra Initiative, 2) Participate in tree planting campaigns, 3) Adopt climate-smart practices in your daily life, 4) Spread awareness about climate issues, 5) Engage with your local representatives on climate policy, 6) Support climate-resilient livelihoods in your community.";
    }
    
    if (lowerInput.includes("climate change") || lowerInput.includes("global warming")) {
      return "Climate change in Ghana is manifesting through rising temperatures (about 1°C increase since 1960), changing rainfall patterns, and more extreme weather events. These changes particularly affect agriculture, water resources, coastal areas, and public health. Ghana is experiencing more frequent droughts in the north, coastal erosion in the south, and unpredictable rainfall patterns affecting crop yields nationwide.";
    }
    
    if (lowerInput.includes("flood") || lowerInput.includes("flooding")) {
      return "Flooding is becoming more severe and frequent in Ghana due to climate change. Urban areas like Accra and Kumasi experience flash floods during heavy rains, exacerbated by poor drainage systems and unplanned development. Ghana's adaptation strategies include improved urban planning, better drainage infrastructure, early warning systems, and community-based disaster risk management to reduce flood impacts.";
    }
    
    if (lowerInput.includes("drought")) {
      return "Droughts in Ghana are becoming more frequent and intense, especially in the northern regions. These droughts affect agriculture, food security, and rural livelihoods. Adaptation measures include drought-resistant crop varieties, improved irrigation systems, water harvesting techniques, and alternative livelihood options for farming communities during dry periods.";
    }
    
    if (lowerInput.includes("coastal") || lowerInput.includes("sea level")) {
      return "Ghana's 550km coastline is vulnerable to sea level rise, coastal erosion, and saltwater intrusion into freshwater sources. Communities in areas like Keta, Ada, and parts of Accra are already experiencing impacts. Adaptation measures include sea defense walls, mangrove restoration, integrated coastal zone management, and in some cases, planned relocation of vulnerable communities.";
    }
    
    if (lowerInput.includes("renewable") || lowerInput.includes("solar") || lowerInput.includes("wind") || lowerInput.includes("energy")) {
      return "Ghana is investing in renewable energy as part of its climate action strategy. Current projects include the 100MW Bui Solar PV Plant, wind energy projects along the eastern corridor, and distributed solar systems for rural electrification. Ghana aims to increase the share of renewable energy in its energy mix to 10% by 2030, reducing dependence on fossil fuels and hydropower, which is vulnerable to changing rainfall patterns.";
    }
    
    return "I don't have specific information on that topic yet. Would you like to know about Ghana's NDCs, adaptation strategies, flooding, droughts, coastal impacts, renewable energy, or how to get involved in climate action?";
  };

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={toggleChat}
        size="icon"
        className={`fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-ghana-green hover:bg-ghana-green/90"
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>
      
      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] flex flex-col shadow-xl rounded-xl overflow-hidden z-50">
          {/* Header */}
          <div className="bg-ghana-green text-white p-4">
            <h3 className="font-bold">ClimateWise</h3>
            <p className="text-xs opacity-90">Your Ghana Climate Information Assistant</p>
          </div>
          
          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === "user"
                        ? "bg-ghana-green text-white"
                        : "bg-white shadow-sm border"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-[10px] opacity-70 block text-right mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Input */}
          <form onSubmit={handleSend} className="p-3 border-t bg-white">
            <div className="flex">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about climate action in Ghana..."
                className="flex-grow mr-2"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-ghana-green hover:bg-ghana-green/90"
              >
                <Send size={18} />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  );
};

export default ClimateWiseChatbot;
