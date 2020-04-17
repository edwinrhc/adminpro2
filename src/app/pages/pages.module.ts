import { NgModule } from "@angular/core";
import { SharedModules } from '../shared/shared.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({

    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports: [

        DashboardComponent,
        ProgressComponent,
        Graficas1Component

    ],
    imports: [

        SharedModules,
        PAGES_ROUTES
    ]

})
export class PagesModule {}