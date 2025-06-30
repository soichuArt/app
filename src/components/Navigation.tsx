import React, { useState } from 'react';
import { 
  Home, 
  User,
  Compass, 
  ShoppingBag, 
  BookOpen, 
  Crown, 
  Calendar, 
  Users, 
  PenTool, 
  MessageCircle,
  Sparkles,
  Heart,
  ChevronDown
} from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigationGroups = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      isDropdown: false,
      page: 'home'
    },
    {
      id: 'soichu',
      label: 'Soichu',
      icon: User,
      isDropdown: true,
      items: [
        { id: 'about', label: 'About', icon: User },
        { id: 'essence', label: 'Essence', icon: Heart }
      ]
    },
    {
      id: 'experiences',
      label: 'Experiences',
      icon: Sparkles,
      isDropdown: true,
      items: [
        { id: 'experiences', label: 'Experiences', icon: Sparkles },
        { id: 'rituals', label: 'Rituals', icon: Compass }
      ]
    },
    {
      id: 'community',
      label: 'Community',
      icon: PenTool,
      isDropdown: false,
      page: 'community'
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: BookOpen,
      isDropdown: true,
      items: [
        { id: 'resources', label: 'Resources', icon: Users },
        { id: 'library', label: 'Library', icon: BookOpen }
      ]
    },
    {
      id: 'premium',
      label: 'Premium',
      icon: Crown,
      isDropdown: true,
      items: [
        { id: 'premium', label: 'Premium', icon: Crown },
        { id: 'shop', label: 'Shop', icon: ShoppingBag }
      ]
    },
    {
      id: 'connect',
      label: 'Connect',
      icon: MessageCircle,
      isDropdown: true,
      items: [
        { id: 'contact', label: 'Contact', icon: MessageCircle },
        { id: 'calendar', label: 'Calendar', icon: Calendar }
      ]
    }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (groupId: string) => {
    setOpenDropdown(openDropdown === groupId ? null : groupId);
  };

  const isGroupActive = (group: any) => {
    if (!group.isDropdown) {
      return currentPage === group.page;
    }
    return group.items?.some((item: any) => item.id === currentPage);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="flex space-x-1 py-3">
            {navigationGroups.map((group) => {
              const Icon = group.icon;
              const isActive = isGroupActive(group);
              
              return (
                <div key={group.id} className="relative">
                  {group.isDropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(group.id)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition duration-200 group ${
                        isActive
                          ? 'text-soichu-700 bg-soichu-100'
                          : 'text-gray-500 hover:text-soichu-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? 'text-soichu-600' : 'group-hover:text-soichu-600'}`} />
                      <span className="text-sm font-light tracking-wide">{group.label}</span>
                      <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                        openDropdown === group.id ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick(group.page!)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition duration-200 group ${
                        isActive
                          ? 'text-soichu-700 bg-soichu-100'
                          : 'text-gray-500 hover:text-soichu-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? 'text-soichu-600' : 'group-hover:text-soichu-600'}`} />
                      <span className="text-sm font-light tracking-wide">{group.label}</span>
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  {group.isDropdown && openDropdown === group.id && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <div className="py-2">
                        {group.items?.map((item) => {
                          const ItemIcon = item.icon;
                          const isItemActive = currentPage === item.id;
                          
                          return (
                            <button
                              key={item.id}
                              onClick={() => handleNavClick(item.id)}
                              className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition duration-200 ${
                                isItemActive
                                  ? 'text-soichu-700 bg-soichu-50'
                                  : 'text-gray-600 hover:text-soichu-700 hover:bg-gray-50'
                              }`}
                            >
                              <ItemIcon className={`h-4 w-4 ${isItemActive ? 'text-soichu-600' : ''}`} />
                              <span className="text-sm font-light">{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Overlay to close dropdowns */}
      {openDropdown && (
        <div 
          className="fixed inset-0 z-30"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </nav>
  );
};

export default Navigation;