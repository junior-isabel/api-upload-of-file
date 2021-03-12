import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  formUser = this.formBuilder.group({
    name: '',
    email: ''
  })
  @Output() formOnSubmit = new EventEmitter<{name: String, email: String}>()
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit (): void {
    if (!this.formUser.value.name || !this.formUser.value.email) return
    this.formOnSubmit.emit(this.formUser.value)
    this.formUser.reset()
  }

}
