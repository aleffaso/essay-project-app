import '@styles/tailwind.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { globalQueryClient } from './queries/globalQueryClient';
import Routes from './routes/routes';
import { antdTheme } from './styles/antd-theme';

const App = () => {
  return (
    <QueryClientProvider client={globalQueryClient}>
      <ConfigProvider theme={antdTheme}>
        <Routes />
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
