'use client'
import { useState } from 'react';

interface TabProps {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

export function Tabs({ tabs }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='flex flex-col  w-full h-full'>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 ${activeTab === index ? 'border-b-2 border-blue-500' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs && tabs[activeTab]?.content}
      </div>
    </div>
  );
}