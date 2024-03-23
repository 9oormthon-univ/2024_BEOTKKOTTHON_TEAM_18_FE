import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import PageRouter from '@/routes/PageRouter.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient.ts';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Toaster
        richColors={true}
        position={'top-center'}
      />
      <PageRouter />
    </BrowserRouter>
  </QueryClientProvider>
);
