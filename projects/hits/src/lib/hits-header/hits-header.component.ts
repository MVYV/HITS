import { Component, OnInit, Input } from '@angular/core';
import { faBars, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface NavListInterface {
    linkName: string;
    linkRoute: string;
}

@Component({
    selector: 'lib-hits-header',
    templateUrl: './hits-header.component.html',
    styleUrls: ['./hits-header.component.scss']
})
export class HitsHeaderComponent implements OnInit {
    @Input() public navList: NavListInterface[];
    @Input() public resourceTitle: string;
    public navIcon = faBars;
    public closeIcon = faTimes;
    public cartIcon = faShoppingCart;
    public isOpen = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    public toggleSidenav() {
        this.isOpen = !this.isOpen;
    }

}
