import { Injectable } from '@angular/core';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Actions, createEffect, ofType } from '@ngrx/effects'; // TODO: 1
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
 
@Injectable()
export class ItemsEffects {
 
    // Escucha los cambios del observable directamente del actions
    loadItems$ = createEffect(() => this.actions$.pipe(
        ofType('[Item List] Load Items'),
        // Combina los dos observables
        mergeMap(() => this.showCaseService.getDataApi() // Retorna toda la data
            .pipe(
                map(items => ({ type: '[Item List] Loaded success', items: items })),
                catchError(() => EMPTY)
            ))
        )
    );
 
  constructor(
    private actions$: Actions,
    private showCaseService: ShowCaseService
  ) {}


}