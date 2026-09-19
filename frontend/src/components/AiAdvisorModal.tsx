'use client';
import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Bot, 
  Send, 
  Sparkles, 
  User, 
  RotateCcw, 
  Building, 
  Coins, 
  ShieldCheck, 
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { Language } from '../types';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

interface AiAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onOpenBooking: (pkgId?: string) => void;
}

export const AiAdvisorModal: React.FC<AiAdvisorModalProps> = ({
  isOpen,
  onClose,
  language,
  onOpenBooking
}) => {
  const isEn = language === 'en';

  const defaultGreeting = isEn
    ? "Welcome to The Promise Hotel & Resort! I am your AI Senior Investment Concierge. How can I assist with our 125 Bigha Master Plan, registered land ownership, 30:70 development model, or projected dividends today?"
    : "দ্য প্রমিজ হোটেল অ্যান্ড রিসোর্টে আপনাকে স্বাগতম! আমি আপনার এআই সিনিয়র ইনভেস্টমেন্ট কনসালট্যান্ট। আমাদের ১২৫ বিঘা মাস্টার প্ল্যান, জমির রেজিস্ট্রেশন, ৩০:৭০ বিজনেজ মডেল কিংবা বার্ষিক লভ্যাংশ সম্পর্কে যেকোনো প্রশ্ন করতে পারেন।";

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-0',
      role: 'model',
      text: defaultGreeting,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = isEn
    ? [
        "Is the land legally registered in my name at sub-registry?",
        "Explain the 30:70 development model and construction share.",
        "What are the annual 3D/2N free stay privileges?",
        "What are the NRI investment steps and foreign currency wire options?"
      ]
    : [
        "আমার নিজ নামে কি জমির সাব-রেজিস্ট্রি দলিল ও নামজারি হবে?",
        "৩০:৭০ ডেভেলপমেন্ট বিজনেস মডেল ও নির্মাণ শেয়ার বুঝিয়ে বলুন।",
        "বাৎসরিক ৩ দিন ২ রাত ফ্রি স্টে সুবিধা কীভাবে পাব?",
        "প্রবাসীরা কীভাবে বিদেশ থেকে সরাসরি বিনিয়োগ করতে পারবেন?"
      ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          language: language,
          history: messages.slice(-6).map((m) => ({
            role: m.role === 'model' ? 'model' : 'user',
            text: m.text
          }))
        })
      });

      const data = await res.json();
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: data.reply || (isEn ? "Thank you for inquiring. Please feel free to ask more details or contact our team directly." : "ধন্যবাদ। যেকোনো তথ্যের জন্য আমাদের জিজ্ঞেস করতে পারেন।"),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errorMsg: Message = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: isEn 
          ? "Our AI consultant is processing high traffic. Please feel free to contact our investment advisory team directly."
          : "অনুগ্রহ করে আমাদের হটলাইনে সরাসরি যোগাযোগ করে বিস্তারিত তথ্য জেনে নিন।",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    }

    setIsLoading(false);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `msg-${Date.now()}`,
        role: 'model',
        text: defaultGreeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1B3D]/85 backdrop-blur-md animate-fadeIn font-sans">
      <div 
        className="bg-white border border-gray-200 rounded-none max-w-2xl w-full h-[85vh] flex flex-col shadow-2xl overflow-hidden relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Strictly Left-aligned, rounded-none) */}
        <div className="p-4 sm:p-5 bg-[#0B1B3D] text-white border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-none bg-[#E5C378] flex items-center justify-center text-[#0B1B3D] shadow-xs">
              <Bot className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <h3 className="font-sans text-sm sm:text-base font-bold text-white text-left">
                  {isEn ? 'The Promise AI Investment Advisor' : 'প্রমিজ এআই ইনভেস্টমেন্ট উপদেষ্টা'}
                </h3>
                <span className="w-2 h-2 rounded-full bg-[#159E42] animate-pulse" />
              </div>
              <p className="text-[11px] text-gray-300 text-left">
                {isEn ? 'Official 125 Bigha Master Plan Knowledge Base' : 'অফিসিয়াল ১২৫ বিঘা মাস্টার প্ল্যান ও ফাইন্যান্সিয়াল গাইড'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetChat}
              title="Reset Chat"
              className="p-2 rounded-none border border-white/20 hover:bg-white hover:text-[#0B1B3D] text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-none border border-white/20 hover:bg-white hover:text-[#0B1B3D] text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chat Message Stream */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#F8F9FA]">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-none flex items-center justify-center shrink-0 text-xs font-bold ${
                m.role === 'user' 
                  ? 'bg-[#0B1B3D] text-[#E5C378]' 
                  : 'bg-white border border-gray-200 text-[#0B1B3D]'
              }`}>
                {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-[85%] rounded-none p-4 text-xs sm:text-sm leading-relaxed text-left ${
                m.role === 'user'
                  ? 'bg-[#0B1B3D] text-white'
                  : 'bg-white border border-gray-200 text-[#111827] shadow-xs whitespace-pre-wrap'
              }`}>
                <p className="text-left">{m.text}</p>
                <span className={`block text-[10px] mt-2 text-right ${m.role === 'user' ? 'text-gray-400' : 'text-gray-400'}`}>
                  {m.timestamp}
                </span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-none bg-white border border-gray-200 text-[#0B1B3D] flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-white border border-gray-200 rounded-none p-4 text-xs text-[#0B1B3D] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E5C378] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[#E5C378] animate-bounce delay-100" />
                <span className="w-2 h-2 rounded-full bg-[#E5C378] animate-bounce delay-200" />
                <span className="text-[11px] text-[#4B5563]">{isEn ? 'Analyzing prospectus & calculations...' : 'বিশ্লেষণ চলছে...'}</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Queries Chips */}
        <div className="px-4 py-2.5 bg-white border-t border-gray-200 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-[11px] font-bold text-[#0B1B3D] flex items-center gap-1 shrink-0 uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#E5C378]" />
              {isEn ? 'Quick Questions:' : 'দ্রুত প্রশ্ন:'}
            </span>
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="px-3 py-1 rounded-none bg-[#F8F9FA] border border-gray-200 text-[11px] text-[#111827] hover:border-[#0B1B3D] hover:bg-[#0B1B3D] hover:text-white transition-colors cursor-pointer text-left"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-gray-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={isEn ? "Ask about land deed title, 30:70 model, ROI..." : "জমির দলিল, ৩০:৭০ মডেল বা প্যাকেজ সম্পর্কে লিখুন..."}
              className="flex-1 px-4 py-3 rounded-none bg-[#F8F9FA] border border-gray-300 text-[#111827] text-xs sm:text-sm focus:border-[#0B1B3D] focus:bg-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="px-5 py-3 rounded-none bg-[#0B1B3D] hover:bg-[#E5C378] hover:text-[#0B1B3D] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 disabled:opacity-50 transition-colors cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">{isEn ? 'Send' : 'পাঠান'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
