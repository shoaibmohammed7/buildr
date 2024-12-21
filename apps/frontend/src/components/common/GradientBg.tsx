import React from 'react';

export function GradientBg() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute right-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-purple-500/20 blur-[100px]" />
    </div>
  );
}