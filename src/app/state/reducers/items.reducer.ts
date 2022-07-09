import { ItemsState } from '@core/models/items.state';
import { createReducer, on } from '@ngrx/store'; // TODO: (1) Reducer importacion
import { ItemModel } from '../../core/models/Item.interface';
import { loadItems, loadedItems } from '../actions/items.actions';

// TODO: (2) Estado inicial
export const initialState: ItemsState

    // {
    // interface sin exportar
    // loading: boolean,
    // items: ReadonlyArray<ItemModel>;    

    // inicializacion de interface
    // }

    = { loading: false, items: [] };

// TODO: (3) Funciones reducers
export const itemsReducer = createReducer(
    // proceso
    initialState,
    // argumentos para on // 'state' hace referencia al estado inicial de la aplicacion 'inicializacion de interface'
    on(loadItems, (state) => { // TODO: Que es lo que quiero que pase cuando se ejecute esta accion
        // Clonacion de objetos ...
        return { ...state, loading: true }
    }),

    // cuando se envian props se captura en un segundo argumento
    on(loadedItems, (state, { items }) => {
        // Clonacion de objetos ...
        return { ...state, loading: false, items: items }
    }),

    // Multiples acciones
    // on(loadItems, (state) => {
    //     return state
    // }),
    // on(loadItems, (state) => {
    //     return state
    // }),
);