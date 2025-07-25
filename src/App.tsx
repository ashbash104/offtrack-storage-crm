import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import { authProvider, dataProvider, liveProvider } from "./providers";
import { Home, ForgotPassword, Login, Register } from "./pages";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler, 
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp} from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";



import { Layout } from "./components";
import { resources } from "./config/resources";

import {
  CompanyCreatePage,
  CompanyEditPage,
  CompanyListPage,
  DashboardPage,
  LoginPage,
  TasksCreatePage,
  TasksEditPage,
  TasksListPage,
} from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              liveProvider={liveProvider}
              notificationProvider={useNotificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              resources={resources}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                liveMode: "auto",
                projectId: "8P0kcq-neGYFw-7QudQZ",
                useNewQueryKeys: true,
              }}
            >
              <Routes>
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
                <Route 
                  element={<Authenticated 
                  key="authenticated-layout"
                  fallback={<CatchAllNavigate to="/login"/>}
                  >
                    <Layout>
                      <Outlet />
                    </Layout>
                  </Authenticated>
                  }>
                    <Route index element={<Home/>} />
                    <Route path="/companies" element={<CompanyListPage/>}/>
                </Route>
              </Routes>
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </AntdApp>
        </RefineKbarProvider>
    </BrowserRouter>
  );
};

export default App;