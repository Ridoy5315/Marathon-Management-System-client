import React from 'react'
import router from "./routes/Routes";
import ReactDOM from "react-dom/client";
import './index.css'

import AuthProvider from './providers/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
