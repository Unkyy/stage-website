# Progressive Web App (PWA) Implementation

This document outlines the PWA implementation for the Trail Running Event Registration application.

## Features Implemented

### 1. Web App Manifest
- Complete `manifest.webmanifest` with all required PWA properties
- Icons for different screen sizes and purposes
- Theme colors and display settings
- Language and orientation support

### 2. Service Worker
- Offline capability with caching strategy
- Cache-first approach with network fallback
- Error handling and logging
- Support for background sync events
- Proper activation and cleanup

### 3. Offline Experience
- Dedicated offline.html page with user-friendly message
- Fallback mechanism when network is unavailable
- Graceful degradation of functionality

### 4. Installation Prompts
- Proper meta tags for mobile web app capability
- Apple touch icons for iOS devices
- Theme color support

## File Structure

```
public/
├── sw.js                 # Service Worker for caching and offline support
├── offline.html          # Offline fallback page
├── manifest.webmanifest  # Web App Manifest
└── manifest.json         # Legacy manifest (kept for compatibility)
```

## How It Works

### Service Worker Lifecycle
1. **Install**: Caches core assets (`/`, `/offline.html`, `/manifest.webmanifest`, icons)
2. **Activate**: Cleans up old caches and prepares for use
3. **Fetch**: Serves cached content when available, falls back to network

### Caching Strategy
- Core assets are cached during installation
- Dynamic content uses cache-first with network fallback
- Offline fallback for unavailable pages

## Testing PWA Features

1. Open Chrome DevTools
2. Go to the "Application" tab
3. Check "Manifest" section for PWA details
4. Test offline mode:
   - Go to Network tab
   - Enable "Offline" checkbox
   - Refresh the page to see offline experience

## Required Browsers/Platforms

- Chrome 42+
- Firefox 44+
- Safari 11.3+
- Edge 17+

## Future Improvements

- Implement Workbox for advanced caching strategies
- Add background sync for form submissions
- Implement push notifications
- Add install prompt functionality
- Implement more sophisticated offline forms
