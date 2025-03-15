import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthGuard, ChildGuard, DeactivateGuard, LoadGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { FormComponent } from './pages/form/form.component';
import { DataComponent } from './pages/data/data.component';
import { DataResolver } from './resolvers/home.resolver';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "home", component: HomeComponent},
    { path: "login", component: LoginComponent},
    { path: "logout", component: LogoutComponent},
    { path: "about", component: AboutComponent},
    { path: "access-denied", component: AccessDeniedComponent},
    { path: 'form', component: FormComponent, canDeactivate: [DeactivateGuard] },
    { path: 'data', component: DataComponent, resolve: { resolvedData: DataResolver } },
    { path: "contact", component: ContactComponent,canActivate: [AuthGuard]},
    { path: 'feature', loadChildren: () => import('./modules/feature/feature.module').then(m => m.FeatureModule) },
    { path: 'checkout', loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule) },
    { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
        canActivateChild: [ChildGuard],canLoad: [LoadGuard] },
    { path: "**", component: PageNotFoundComponent }
];
