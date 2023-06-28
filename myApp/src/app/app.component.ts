import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myApp';

  constructor(private db: AngularFireDatabase, private router: Router) {}

  goToListProduct() {
    this.router.navigate(['/list-product']);
  }

  ngOnInit() {

    this.db.list("teste").push("test")

    .then( result =>

      console.log(result.key)

    );

  }
}
