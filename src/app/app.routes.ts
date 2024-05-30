import { Routes } from '@angular/router';
import { ProcessesComponent } from './core/layouts/processes/processes.component';
import { ContractsComponent } from './core/layouts/contracts/contracts.component';
import { CalendarComponent } from './core/layouts/calendar/calendar.component';


export const routes: Routes = [
    {path: "processs", component: ProcessesComponent},
    {path: "contratos", component: ContractsComponent},
    {path: "calendar", component: CalendarComponent}
];
