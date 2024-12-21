import React from 'react';
import { Zap } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 text-blue-500">
      <div className="animate-pulse">
        <Zap className="w-8 h-8" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Bolt
      </span>
    </div>
  );
}