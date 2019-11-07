import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smt';
  elements: number[] = [];
  message = '';
  hobbies = ['book', 'movie'];
  newHobby = '';
  hobbyDeleted = false;

  onChangeName() {
    this.title = "Anna";
  }

  onAddElement(){
    this.elements.push(this.elements.length + 1)
  }

  getColor(element){
    return element % 2 === 0 ? 'green' : 'red';
  }

  

  onUserWasClicked(username: string) {
    alert(username);
  }

  onAddHobby(){
    this.hobbies.push(this.newHobby);
  }

  onDeleteHobby(hobby){
    for (var i = 0; i < this.hobbies.length; i++){
      if (this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
        this.hobbyDeleted = true;
        break;
      }
    }
  }
}
