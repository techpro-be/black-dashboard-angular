import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';
// import { NotFoundComponent } from '../components/not-found/not-found.component';
// import { HeaderComponent } from '../components/header/header.component';
// import { SidenavListComponent } from '../components/sidenav-list/sidenav-list.component';
// import { LayoutComponent } from '../components/layout/layout.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations:
    [
      // HeaderComponent,
      // SidenavListComponent,
      // NotFoundComponent,
      // LayoutComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    // HeaderComponent,
    // SidenavListComponent,
    // NotFoundComponent,
    // LayoutComponent
  ],
})
export class SharedModule { }
