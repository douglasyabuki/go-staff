import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import Layout from './layout/Layout';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Layout>
          <Router>
            <AppRoutes />
          </Router>
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
