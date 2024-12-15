
import { useEffect } from 'react';


export const lazyLoadImages = (): void => {
    const images = document.querySelectorAll('img:not([loading="lazy"])');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
        
        // Type-safe image handling
        if (img instanceof HTMLImageElement) {
            img.addEventListener('load', () => {
                img.style.transition = 'opacity 0.3s';
            });
        }
    });
};

export const optimizeSelects = (): void => {
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        if (select instanceof HTMLSelectElement) {
            select.addEventListener('focus', () => {
                select.style.outline = 'none';
                select.style.boxShadow = '0 0 5px rgba(0,0,0,0.1)';
            });
            select.addEventListener('blur', () => {
                select.style.boxShadow = 'none';
            });
        }
    });
};

export const logPerformance = (): void => {
    const performanceEntries = performance.getEntriesByType('resource');
    const slowResources = performanceEntries.filter(entry => entry.duration > 200);
    
    console.group('Performance Insights');
    console.log('Total Resources:', performanceEntries.length);
    console.log('Slow Resources:', slowResources.length);
    slowResources.forEach(resource => {
        console.warn(`Slow Resource: ${resource.name} (${resource.duration}ms)`);
    });
    console.groupEnd();
};

// Performance Optimization Component
export const PerformanceOptimizer: React.FC = () => {
    useEffect(() => {
        const initializeOptimizer = () => {
            lazyLoadImages();
            optimizeSelects();
            
            // Run performance logging after a short delay
            setTimeout(logPerformance, 2000);
        };

        // Run on initial mount
        initializeOptimizer();

        
        return () => {
           
        };
    }, []); 

    return null; 

};
