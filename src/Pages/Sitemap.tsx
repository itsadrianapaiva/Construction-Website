import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  const sitemapLinks = [
    { path: '/', label: 'Home' },
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/terms-of-service', label: 'Terms of Service' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Site Map</h1>
      <div className="space-y-4">
        {sitemapLinks.map((link) => (
          <div key={link.path} className="border-b pb-2">
            <Link 
              to={link.path} 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;