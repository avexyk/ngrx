import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'; // TODO:
import { loadItems } from 'src/app/state/actions/items.actions';


@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

  // escuchar valor del store


  constructor(
    private store: Store<any>
  ) {


  }

  ngOnInit(): void {
    this.store.dispatch(loadItems()); // Aqui comienza el estado
  }


}
