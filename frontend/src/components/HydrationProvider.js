import React, { useState, useEffect, useCallback } from 'react';

/**
 * Provider component that handles hydration state and loading
 * This component wraps the entire application to manage hydration states
 */
export const HydrationProvider = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hydrationError, setHydrationError] = useState(null);

  // Handle hydration errors
  const handleHydrationError = useCallback((error) => {
    console.error('Hydration error:', error);
    setHydrationError(error);
    setIsLoading(false);
  }, []);

  // Simulate hydration process
  useEffect(() => {
    const hydrationTimer = setTimeout(() => {
      setIsHydrated(true);
      setIsLoading(false);
    }, 100); // Small delay to simulate hydration

    // Cleanup timeout
    return () => clearTimeout(hydrationTimer);
  }, []);

  // If there's an error, show error boundary
  if (hydrationError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-destructive" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-foreground">Hydration Failed</h2>
          <p className="text-muted-foreground text-center">There was an issue initializing the application. Please refresh the page.</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  // If still loading, show loading state
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 animate-spin">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          </div>
          <p className="text-lg text-foreground">Loading application...</p>
        </div>
      </div>
    );
  }

  // If fully hydrated, render children
  return (
    <div className={isHydrated ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}>
      {children}
    </div>
  );
};

/**
 * Hook to check hydration status
 */
export const useHydration = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return { isHydrated };
};
