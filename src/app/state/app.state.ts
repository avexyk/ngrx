import { ItemsState } from "@core/models/items.state";
import { ActionReducerMap } from "@ngrx/store";
import { itemsReducer } from "./reducers/items.reducer";


// conceptualmente una base de datos y las propiedades tablas
export interface AppState {
    // debe cumplir con la interface del estado inicial
    items: ItemsState;
    // shoppingCar: ReadonlyArray<string>;
}

// Contiene el estado de la aplicacion / Tipa estricto / Mapeo de acciones del reducer y que cumpla la interfaz que esta arriba
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    // itemsReducer va a forma parte de items
    items: itemsReducer
}