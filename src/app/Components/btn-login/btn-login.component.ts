import { Component, EventEmitter, Output } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-btn-login',
  templateUrl: './btn-login.component.html',
  styleUrls: ['./btn-login.component.css']
})
export class BtnLoginComponent {
  faPen = faPen;
  @Output() event: EventEmitter<boolean> = new EventEmitter<boolean>();
  check:boolean = true;

  checkeado() {
    this.event.emit(this.check)
    console.log(this.check);
  }
}
