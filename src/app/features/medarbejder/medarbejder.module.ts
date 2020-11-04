import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverblikComponent } from './container/overblik/overblik.component';

@NgModule({
  declarations: [OverblikComponent],
  imports: [CommonModule],
  exports: [OverblikComponent],
})
export class MedarbejderModule {}
