import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
  </QueryClientProvider>
);