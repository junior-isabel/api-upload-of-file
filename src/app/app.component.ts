import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-upload-pdf';

  users = []
  user = null
  onSubmit (values) {
    this.users.push(values)
  }
  onUserActive (user) {
    this.user = user
  }
}
