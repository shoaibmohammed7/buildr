import React, { useState } from 'react';
import { StepsPanel } from './StepsPanel';
import { FileExplorer } from './FileExplorer';
import { EditorPanel } from './EditorPanel';
import { EditorTab } from '../../types';

interface WorkspaceProps {
  onNewPrompt: (prompt: string) => void;
}

export function Workspace({ onNewPrompt }: WorkspaceProps) {
  const [prompt, setPrompt] = useState('');
  const [tabs, setTabs] = useState<EditorTab[]>([
    { id: 'code', label: 'Code', type: 'code', active: true },
    { id: 'preview', label: 'Preview', type: 'preview', active: false },
  ]);

  const handleNewPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onNewPrompt(prompt);
      setPrompt('');
    }
  };

  const handleTabChange = (tabId: string) => {
    setTabs(tabs.map(tab => ({
      ...tab,
      active: tab.id === tabId
    })));
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <StepsPanel
        prompt={prompt}
        onPromptChange={setPrompt}
        onSubmit={handleNewPrompt}
      />
      <FileExplorer />
      <EditorPanel tabs={tabs} onTabChange={handleTabChange} />
    </div>
  );
}