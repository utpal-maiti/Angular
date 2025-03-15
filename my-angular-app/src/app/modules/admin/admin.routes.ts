import { Routes } from "@angular/router";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { SettingsComponent } from "../../pages/settings/settings.component";

export const adminRoutes: Routes = [
  { path: '',  component: DashboardComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'settings', component:SettingsComponent },
];