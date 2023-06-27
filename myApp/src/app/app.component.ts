import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myApp';

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {

    this.db.list("teste").push("test")

    .then( result =>

      console.log(result.key)

    );

  }
}
