import { createAction, props } from '@ngrx/store'; //TODO: Action importacion
import { ItemModel } from '../../core/models/Item.interface';
 
export const loadItems = createAction(
    '[Item List] Load Items', //TODO: type
);

export const loadedItems = createAction(
    '[Item List] Loaded success',
    props<{ items: ItemModel[] }>()
);

