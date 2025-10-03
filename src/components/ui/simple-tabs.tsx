'use client';

import { useState, ReactNode } from 'react';

interface SimpleTab {
  label: string;
  content: ReactNode;
}

interface SimpleTabsProps {
  tabs: SimpleTab[];
}

export function SimpleTabs({ tabs }: SimpleTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-4 text-sm md:text-base uppercase tracking-wider transition-colors relative ${
              activeTab === index
                ? 'text-black font-medium'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {tab.label}
            {activeTab === index && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{tabs[activeTab].content}</div>
    </div>
  );
}
