import { NgModule } from '@angular/core';
import { NpmlibMaterialchipComponent } from './npmlib-materialchip.component';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    NpmlibMaterialchipComponent
  ],
  imports: [
    NoopAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    MatIconModule,
    
  ],
  exports: [
    NpmlibMaterialchipComponent
  ]
})
export class NpmlibMaterialchipModule { }
