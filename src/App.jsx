import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Cabins from "./pages/Cabins";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import GlobalStyles from "./styles/GlobalStyles";
import Bookings from "./pages/Bookings";
import NewUsers from "./pages/Users";
import Account from "./pages/Account";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="settings" element={<Settings />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="users" element={<NewUsers />} />
            <Route path="account" element={<Account />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
