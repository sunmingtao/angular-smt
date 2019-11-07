import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'app-hobby',
    template: '<li (click)="onHobbyClicked()">{{hobby}}</li>'
})

export class HobbyComponent {
    @Input() hobby : string;
    @Output() hobbyClicked = new EventEmitter<string>();

    onHobbyClicked(){
        this.hobbyClicked.emit(this.hobby);
    }
}