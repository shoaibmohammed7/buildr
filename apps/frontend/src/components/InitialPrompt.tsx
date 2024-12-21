import React, { useState } from 'react';
import { SendHorizontal, Sparkles, Code, Rocket } from 'lucide-react';
import { Button } from './common/Button';
import { Logo } from './common/Logo';
import { GradientBg } from './common/GradientBg';

interface InitialPromptProps {
  onSubmit: (prompt: string) => void;
}

export function InitialPrompt({ onSubmit }: InitialPromptProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt('');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8">
      <GradientBg />
      
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="space-y-6 text-center">
          <Logo />
          <h1 className="text-5xl font-bold text-gray-100">
            Build Anything with AI
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your ideas into reality with Buildr's AI-powered development environment
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you want to build..."
              className="w-full h-40 p-6 bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-200 placeholder-gray-500 relative"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <Feature icon={<Sparkles className="w-5 h-5" />} text="AI-Powered" />
              <Feature icon={<Code className="w-5 h-5" />} text="Real-Time Preview" />
              <Feature icon={<Rocket className="w-5 h-5" />} text="Instant Deploy" />
            </div>
            <Button
              type="submit"
              size="lg"
              className="group relative overflow-hidden px-8"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Building
                <SendHorizontal className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-400">
      {icon}
      <span>{text}</span>
    </div>
  );
}