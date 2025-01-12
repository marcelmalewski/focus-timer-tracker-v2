import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { TimerComponent } from './component/timer/timer.component';
import { RegisterComponent } from './component/register/register.component';
import { SettingsComponent } from './component/settings/settings.component';
import { PrincipalBasicDataGuard } from './guard/principal-basic-data.guard';
import { UnknownErrorComponent } from './component/unknown-error/unknown-error.component';
import { NotLoggedInMessage } from './other/message';
import { LoggedOutGuard } from './guard/logged-out-guard';

export const routes: Routes = [
    {
        path: 'login',
        title: 'login',
        component: LoginComponent,
        canActivate: [LoggedOutGuard],
    },
    {
        path: 'register',
        title: 'register',
        component: RegisterComponent,
        canActivate: [LoggedOutGuard],
    },

    {
        path: 'timer',
        title: 'timer',
        component: TimerComponent,
        canActivate: [PrincipalBasicDataGuard],
    },
    {
        path: 'settings',
        title: 'settings',
        component: SettingsComponent,
        canActivate: [PrincipalBasicDataGuard],
    },
    {
        path: 'unknown-error',
        title: 'unknown-error',
        component: UnknownErrorComponent,
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: LoginComponent }, //TODO add page not found
];
