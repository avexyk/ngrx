import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'; // TODO: 1
import { loadedItems, loadItems } from 'src/app/state/actions/items.actions';
import { Observable } from 'rxjs';
import { selectLoading } from 'src/app/state/selectors/items.selectors';
import { ShowCaseService } from '../../services/show-case.service';
import { ItemModel } from '../../../../core/models/Item.interface';


@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

  // escuchar valor del store

  // $ significa que es un tipo observable, este tipo estara escuchando
  loading$:Observable<boolean> = new Observable();

  constructor(
    private store: Store<any>,
    private showCaseService: ShowCaseService
  ) {


  }

  ngOnInit(): void {
    // escuchando un selector del store
    this.loading$ = this.store.select(selectLoading);

    this.store.dispatch(loadItems()); // Aqui comienza el estado

    this.showCaseService.getDataApi()
        .subscribe( (response: ItemModel[]) => {
          // console.log( '_____________', response );
          this.store.dispatch(loadedItems(
            { items: response }
          )); // se llama a loadedItems cuando los articulos han sido cargados de forma correcta y se le manda los el array del api
        });
  }


}
