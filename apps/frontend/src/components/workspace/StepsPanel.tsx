import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '../common/Button';

interface StepsPanelProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function StepsPanel({ prompt, onPromptChange, onSubmit }: StepsPanelProps) {
  return (
    <div className="w-1/4 border-r border-gray-700 bg-gray-900 overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold text-gray-200">Steps & Response</h2>
        </div>
        <div className="space-y-4">
          <div className="p-3 bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-300">Response will appear here...</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="mt-4">
          <textarea
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
            placeholder="Enter additional prompts..."
            className="w-full h-24 p-3 bg-gray-800 border border-gray-700 rounded-lg text-sm resize-none text-gray-200 placeholder-gray-500"
          />
          <Button type="submit" className="mt-2 w-full">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}