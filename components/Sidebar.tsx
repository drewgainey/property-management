'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({ isOpen, onToggle, isCollapsed, onToggleCollapse }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const navItems = [
    { name: 'Properties', href: '/', icon: '🏠' },
    { name: 'Residents', href: '/residents', icon: '👥' },
    { name: 'Billing', href: '/billing', icon: '💰' },
    { name: 'Accounting', href: '/accounting', icon: '📊' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:shadow-none
        ${isCollapsed ? 'w-16' : 'w-64'}
      `}>
        {/* Header */}
        <div className={`flex items-center justify-between border-b border-gray-200 ${isCollapsed ? 'p-3' : 'p-6'}`}>
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-gray-900">Property Manager</h1>
          )}
          <div className="flex items-center space-x-2">
            {/* Collapse/Expand button - only show on desktop */}
            <button
              onClick={onToggleCollapse}
              className="hidden lg:block p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isCollapsed ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                )}
              </svg>
            </button>
            {/* Close button - only show on mobile */}
            <button
              onClick={onToggle}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <div className={`space-y-1 ${isCollapsed ? 'px-2' : 'px-3'}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  // Close sidebar on mobile when navigating
                  if (window.innerWidth < 1024) {
                    onToggle();
                  }
                }}
                className={`
                  flex items-center text-sm font-medium rounded-md transition-colors group
                  ${isCollapsed ? 'px-2 py-3 justify-center' : 'px-3 py-2'}
                  ${isActive(item.href)
                    ? 'bg-indigo-100 text-indigo-700 border-r-2 border-indigo-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
                title={isCollapsed ? item.name : undefined}
              >
                <span className={`text-lg ${isCollapsed ? '' : 'mr-3'}`}>{item.icon}</span>
                {!isCollapsed && (
                  <span className="truncate">{item.name}</span>
                )}
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.name}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className={`absolute bottom-0 left-0 right-0 border-t border-gray-200 ${isCollapsed ? 'p-3' : 'p-6'}`}>
          {!isCollapsed && (
            <div className="text-xs text-gray-500">
              Property Management System
            </div>
          )}
        </div>
      </div>
    </>
  );
}
