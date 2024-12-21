import React from 'react';
import { Files, ChevronRight } from 'lucide-react';

export function FileExplorer() {
  return (
    <div className="w-1/4 border-r border-gray-700 bg-gray-900">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Files className="w-5 h-5 text-blue-400" />
          <h2 className="font-semibold text-gray-200">File Explorer</h2>
        </div>
        <div className="space-y-2">
          <div className="flex items-center p-2 hover:bg-gray-800 rounded cursor-pointer text-gray-300">
            <ChevronRight className="w-4 h-4 mr-1" />
            <p className="text-sm">src/</p>
          </div>
        </div>
      </div>
    </div>
  );
}