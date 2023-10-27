import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <Router>
        <AppRoutes />
      </Router>
    </Layout>
  );
}

export default App;
