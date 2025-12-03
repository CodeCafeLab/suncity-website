'use client';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { customerSupportChatbot } from '@/ai/flows/customer-support-chatbot';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Logo from './Logo';

type Message = {
  role: 'user' | 'bot';
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'bot',
          content: "Hello! I'm the Suncity Solar assistant. How can I help you today about our products, services, or general solar queries?",
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    // scroll to bottom
    const scrollArea = scrollAreaRef.current?.querySelector('div > div');
    if (scrollArea) {
      scrollArea.scrollTo({ top: scrollArea.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const response = await customerSupportChatbot({ query: currentInput });
      const botMessage: Message = { role: 'bot', content: response.answer };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = {
        role: 'bot',
        content: 'Sorry, I encountered an error. Please try again later.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={() => setIsOpen(!isOpen)} size="icon" className="rounded-full w-16 h-16 bg-gradient-solar text-white shadow-lg transform hover:scale-110 transition-transform">
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-sm">
            <Card className="shadow-2xl flex flex-col h-[60vh]">
            <CardHeader className="flex flex-row items-center justify-between border-b">
                <div className="flex items-center gap-2">
                <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground"><Bot /></AvatarFallback>
                </Avatar>
                <CardTitle>Suncity Assistant</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
                <ScrollArea className="h-full" ref={scrollAreaRef}>
                <div className="space-y-6 p-4">
                    {messages.map((message, index) => (
                    <div key={index} className={cn('flex items-end gap-2', message.role === 'user' ? 'justify-end' : 'justify-start')}>
                        {message.role === 'bot' && (
                            <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={16} /></AvatarFallback>
                            </Avatar>
                        )}
                        <div className={cn('rounded-lg px-4 py-2 max-w-[85%] whitespace-pre-wrap', message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary')}>
                            <p className="text-sm">{message.content}</p>
                        </div>
                        {message.role === 'user' && (
                            <Avatar className="h-8 w-8">
                                <AvatarFallback><User size={16} /></AvatarFallback>
                            </Avatar>
                        )}
                    </div>
                    ))}
                    {isLoading && (
                    <div className="flex items-end gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={16} /></AvatarFallback>
                        </Avatar>
                        <div className="rounded-lg px-4 py-2 bg-secondary">
                            <div className="flex items-center space-x-1">
                                <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-primary rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                </ScrollArea>
            </CardContent>
            <CardFooter className="p-4 border-t">
                <form
                onSubmit={e => {
                    e.preventDefault();
                    handleSend();
                }}
                className="flex w-full items-center space-x-2"
                >
                <Input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Ask about solar..."
                    disabled={isLoading}
                    autoComplete="off"
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                    <Send className="h-4 w-4" />
                </Button>
                </form>
            </CardFooter>
            </Card>
        </div>
      )}
    </>
  );
}
