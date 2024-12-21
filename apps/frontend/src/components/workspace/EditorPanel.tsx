import React from 'react';
import { Code, Play } from 'lucide-react';
import { EditorTab } from '../../types';
import { cn } from '../../utils/classNames';

interface EditorPanelProps {
  tabs: EditorTab[];
  onTabChange: (tabId: string) => void;
}

export function EditorPanel({ tabs, onTabChange }: EditorPanelProps) {
  return (
    <div className="w-1/2 bg-gray-900">
      <div className="p-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors',
                  tab.active
                    ? 'bg-gray-700 text-gray-200'
                    : 'text-gray-400 hover:text-gray-300'
                )}
              >
                {tab.type === 'code' ? (
                  <Code className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="h-[calc(100%-3rem)] bg-gray-950 rounded-lg">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(
                'h-full w-full',
                !tab.active && 'hidden'
              )}
            >
              {tab.type === 'code' ? (
                <div className="text-gray-300 p-4">
                  <pre>// Code will appear here...</pre>
                </div>
              ) : (
                <div className="h-full w-full bg-white rounded-lg">
                  {/* Preview iframe will be mounted here */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}