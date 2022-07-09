import { createSelector } from '@ngrx/store'; // TODO: 1
import { AppState } from '../app.state';
import { ItemsState } from '../../core/models/items.state';

// TODO: Este selector tiene relacion con  la propiedad "items"
export const selectItemsFeature = (state: AppState) => state.items; // TODO: Padre
// export const selectShopping = (state: AppState) => state.items;
 
// Exportar propiedad items
export const selectListItems = createSelector(
    selectItemsFeature,
    // selectShopping,
    // a -> hace refencia al primer selector, b -> hace referencia al segundo selector y asi sucesivamente   
    // (a, b)  => state.counter
    (state: ItemsState) => state.items // TODO: Hijo
);

// Exportar propiedad loading
export const selectLoading = createSelector(
    selectItemsFeature,
    (state: ItemsState) => state.loading // TODO: Hijo
);