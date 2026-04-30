import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { I18nProvider } from '@/hooks/useI18n'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <I18nProvider>
      <App />
    </I18nProvider>
  </HashRouter>,
)
