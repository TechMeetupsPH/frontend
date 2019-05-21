import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinnerComponent } from './spinner.component'
import {SpinnerManager} from './shared/spinner-manager'

@NgModule({
    imports: [CommonModule],
    declarations: [SpinnerComponent],
    exports: [SpinnerComponent],
    providers: [SpinnerManager]
})

export class SpinnerModule { }
