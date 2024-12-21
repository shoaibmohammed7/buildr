import React, { useState } from 'react';
import { MessageSquare, Files, Code } from 'lucide-react';

interface WorkspaceProps {
  onNewPrompt: (prompt: string) => void;
}

export function Workspace({ onNewPrompt }: WorkspaceProps) {
  const [newPrompt, setNewPrompt] = useState('');

  const handleNewPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPrompt.trim()) {
      onNewPrompt(newPrompt);
      setNewPrompt('');
    }
  };

  return (
    <div className="flex h-[calc(100vh-12rem)] bg-gray-50">
      {/* Steps Panel */}
      <div className="w-1/4 border-r border-gray-200 bg-white overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            <h2 className="font-semibold">Steps & Response</h2>
          </div>
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Response will appear here...</p>
            </div>
          </div>
          <form onSubmit={handleNewPrompt} className="mt-4">
            <textarea
              value={newPrompt}
              onChange={(e) => setNewPrompt(e.target.value)}
              placeholder="Enter additional prompts..."
              className="w-full h-24 p-3 border rounded-lg text-sm resize-none"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* File Explorer */}
      <div className="w-1/4 border-r border-gray-200 bg-white">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Files className="w-5 h-5 text-blue-600" />
            <h2 className="font-semibold">File Explorer</h2>
          </div>
          <div className="space-y-2">
            <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
              <p className="text-sm">src/</p>
            </div>
            {/* Add more files/folders here */}
          </div>
        </div>
      </div>

      {/* Code Editor */}
      <div className="w-1/2 bg-[#1e1e1e]">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-white">Code Editor</h2>
          </div>
          <div className="h-[calc(100%-3rem)] bg-[#1e1e1e] rounded-lg">
            {/* Monaco editor will be mounted here */}
            <div className="text-gray-400 p-4">
              <pre>// Code will appear here...</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}