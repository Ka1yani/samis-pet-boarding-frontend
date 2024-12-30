import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <HomePage />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;