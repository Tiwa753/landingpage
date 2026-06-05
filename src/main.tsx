import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

// Prevent service worker registration in insecure contexts or inside VS Code webviews.
// Some plugins or third-party scripts may attempt to register a service worker
// automatically; override register with a no-op when the document is not suitable.
const isSecureContext = location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1'
const isVsCodeWebview = typeof (window as any).acquireVsCodeApi === 'function' || location.protocol === 'vscode-webview:'
if ('serviceWorker' in navigator && (!isSecureContext || isVsCodeWebview)) {
  try {
    ;(navigator as any).serviceWorker.register = async () => {
      console.warn('ServiceWorker.register skipped: insecure context or VS Code webview')
      return Promise.resolve({} as any)
    }
  } catch (err) {
    console.warn('Could not override serviceWorker.register', err)
  }
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
