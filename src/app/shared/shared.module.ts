import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

// Module
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // esto viene con el ngif ngfor usos de pipe  y cosas necesarias

@NgModule({

    imports: [
        RouterModule,
        CommonModule
    ],

    declarations: [

        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ],
    exports: [
        
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent

    ]
    

})
export class SharedModules {}