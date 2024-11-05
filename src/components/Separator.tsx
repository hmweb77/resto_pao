"use client"
import React from 'react';
import { Croissant } from 'lucide-react';

export function Separator() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="h-px bg-orange-300 w-24"></div>
      <Croissant className="h-8 w-8 text-orange-400 mx-4" />
      <div className="h-px bg-orange-300 w-24"></div>
    </div>
  );
}