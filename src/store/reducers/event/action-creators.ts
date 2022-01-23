import {EventActionEnum, SetEventsAction, SetGuestsAction} from './types';
import {IUser} from '../../../models/IUser';
import {IEvent} from '../../../models/IEvent';
import {AppDispatch} from '../../index';
import UserService from '../../../api/UserService';


export const EventActionCreators = {
    setGuests: (guests: IUser[]): SetGuestsAction => ({
        type: EventActionEnum.SET_GUESTS,
        payload: guests
    }),
    setEvents: (events: IEvent[]): SetEventsAction => ({
        type: EventActionEnum.SET_EVENTS,
        payload: events
    }),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers();
            dispatch(EventActionCreators.setGuests(response.data))
        } catch (e) {
            console.log(e)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            json.push(event)
            dispatch(EventActionCreators.setEvents(json))
            localStorage.setItem('events', JSON.stringify(json))
        } catch (e) {
            console.log(e)
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            const currentUserEvent = json.filter(ev => ev.author === username || ev.guest === username)
            dispatch(EventActionCreators.setEvents(currentUserEvent))
        } catch (e) {

        }
    }
}