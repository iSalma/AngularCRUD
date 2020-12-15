import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [SidemenuComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SidemenuComponent]
})
export class ScreenModule { }
