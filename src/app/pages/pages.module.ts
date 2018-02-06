
import { NgModule } from '@angular/core';

import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';

// Modulos
import { SharedModule } from '../shared/shared.module';

//Rutas
import { PAGES_ROUTES } from '../pages/pages.routes';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES, 
    ]
})

export class PagesModule { }