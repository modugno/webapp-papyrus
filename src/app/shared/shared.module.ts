import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PpToolbarComponent } from './components/pp-toolbar/pp-toolbar.component';
import { PpMenuComponent } from './components/pp-menu/pp-menu.component';
import { PpSearchComponent } from './components/pp-search/pp-search.component';
import { PpHeaderComponent } from './components/pp-header/pp-header.component';
import { CardTextFieldComponent, PpButtonDirective, PpInputDirective } from './components/card-text-field/card-text-field.component';
import { PpCardComponent } from './components/pp-card/pp-card.component';

const components = [
  PpToolbarComponent,
  PpMenuComponent,
  PpSearchComponent,
  PpHeaderComponent,
  CardTextFieldComponent,
  PpButtonDirective,
  PpInputDirective,
  PpCardComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
