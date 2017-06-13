import { ActionReducer, Action } from '@ngrx/store';

import { ADD_TRENDS, LOGOUT, INIT } from '../actions';

const defaultState = [];

const propertiesToKeep: string[] = [
    'id', 'id_str', 'created_at', 'text', 'truncated', 'user',
    'favorite_count', 'favorited', 'retweet_count', 'retweeted', 'entities'
];

export const notificationsReducer: ActionReducer<Object> = (state: INotification[] = defaultState, action: Action) => {
    const payload = action.payload;

    switch (action.type) {
        case ADD_TRENDS: {
            const { trends: hashtags, ...rest } = payload;
            return {
                hashtags,
                ...rest,
            }
        }

        case INIT: {
            return payload.notifications || defaultState;
        }

        case LOGOUT: {
            return defaultState;
        }

        default:
            return state;
    }
}

export interface INotification {
   
}