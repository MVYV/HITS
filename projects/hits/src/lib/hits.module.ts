import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HitsComponent } from './hits.component';
import { HitsHeaderComponent } from './hits-header/hits-header.component';


@NgModule({
    declarations: [HitsComponent, HitsHeaderComponent],
    imports: [CommonModule, RouterModule, FontAwesomeModule],
    exports: [HitsComponent, HitsHeaderComponent]
})
export class HitsModule {
}
