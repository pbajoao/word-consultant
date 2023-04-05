import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() onAdd = new EventEmitter();

    constructor() { }

    public onAddWord(): void{
        this.onAdd.emit();
    }
}
