import { Routes } from '@angular/router';
import { ProcessesComponent } from './core/layouts/processes/processes.component';
import { ContractsComponent } from './core/layouts/contracts/contracts.component';
import { CalendarComponent } from './core/layouts/calendar/calendar.component';
import { HomeComponent } from './core/layouts/home/home.component';
import { AccessComponent } from './core/layouts/access/access.component';
import { authGuard } from './core/guard/auth.guard';


export const routes: Routes = [
    {path: "", component: AccessComponent},
    {path: "home", component: HomeComponent, canActivate: [authGuard]},
    {path: "processess", component: ProcessesComponent, canActivate: [authGuard]},
    {path: "contracts", component: ContractsComponent, canActivate: [authGuard]},
    {path: "calendar", component: CalendarComponent, canActivate: [authGuard]},
];
