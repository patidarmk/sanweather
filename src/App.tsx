import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Layout from './components/Layout';
import Map from './pages/Map';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Toaster />
          <Sonner />
          <Outlet />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  ),
  notFoundComponent: NotFound,
})

// Create routes
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const mapRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/map',
  component: Map,
})

const alertsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/alerts',
  component: Alerts,
})

const settingsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: Settings,
})

// Create route tree
const routeTree = rootRoute.addChildren([indexRoute, mapRoute, alertsRoute, settingsRoute])

// Create router
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;