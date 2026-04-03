import { GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import { dataProvider } from "./providers/data";
//Added
import { Layout } from "./components/refine-ui/layout/layout";
import { Outlet } from "react-router";
import Dashboard from "./pages/dashboard";
import SubjectsList from "./pages/subjects/list";
import SubjectCreate from "./pages/subjects/create";
import { resources } from "./constants";
import ClassesList from "./pages/classes/list";
import ClassesCreate from "./pages/classes/create";
import ClassesShow from "./pages/classes/show";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "ZCMYYo-d1z85y-51vdCe",
              }}
              resources={resources}

            >
              <Routes>
                <Route  element={<Layout><Outlet/></Layout>}>
                {/* Main Route Start */}
                <Route path='/' element={<Dashboard />} />
                <Route path='subjects'>
                  <Route index element={<SubjectsList />} />
                  <Route path="create" element={<SubjectCreate />} />
                </Route>
                <Route path='classes'>
                  <Route index element={<ClassesList />} />
                  <Route path="create" element={<ClassesCreate />} />
                  <Route path="show/:id" element={<ClassesShow />} />
                </Route>
                {/* Main Route End */}
                </Route>
              </Routes>
              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
