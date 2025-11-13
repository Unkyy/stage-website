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
      <div className="hydration-error">
        <h2>Hydration Failed</h2>
        <p>There was an issue initializing the application. Please refresh the page.</p>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
    );
  }

  // If still loading, show loading state
  if (isLoading) {
    return (
      <div className="hydration-loading">
        <div className="spinner"></div>
        <p>Loading application...</p>
      </div>
    );
  }

  // If fully hydrated, render children
  return (
    <div className={isHydrated ? 'hydrated' : 'not-hydrated'}>
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
