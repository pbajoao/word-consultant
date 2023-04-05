import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ConsultantComponent } from './consultant.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

const routes: Routes = [
    { path: '', component: ConsultantComponent }
]

@NgModule({
    declarations: [
        ConsultantComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        HeaderModule,
        MaterialModule
    ]
})
export class ConsultantModule { }
