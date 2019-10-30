import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatMenuModule
  ],
  exports:[
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
