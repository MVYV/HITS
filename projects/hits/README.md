# Angular Hits

Library for e-commerce purpose. Start you business easier and faster.

# How to use

`app.module.ts`

```ts
import { HitsModule } from 'angular-hits';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HitsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

`test.component.ts`

```ts
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{
    public title = 'My Title';
    public listItems = [
        {
            linkName: 'Kiesha',
            linkRoute: '/kiesha'
        }
    ]

    constructor() {
    }
    
    ngOnInit():void {
    }
}
```

`test.component.html`

```html
<lib-hits-header [navList]="listItems" [resourceTitle]="title"></lib-hits-header>
```
