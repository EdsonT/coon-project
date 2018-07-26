import { Services } from "../Models/services.model";

export const SERVICES:Services[]=[
    {
        id:1,
        name:'Get calendar Events',
        description:'This service obtains all the user account calendar events',
        method:'GET',
        uri:'https://www.googleapis.com/calendar/v3/calendars/calendarId/events/eventId',
        pathParameters:'eventId',
        queryParameters:'',
        headers:'',
        requestBody:'',
        connectorId:21
    },
    {
        id:2,
        name:'Create Event',
        description:'This service insert a new calendar event in the user google account',
        method:'POST',
        uri:'https://www.googleapis.com/calendar/v3/calendars/calendarId/events',
        pathParameters:'calendarId',
        queryParameters:'',
        headers:'',
        requestBody:'',
        connectorId:22
    },
    {
        id:3,
        name:'Delete Event',
        description:'This service will remove the event from the calendars',
        method:'DELETE',
        uri:'https://www.googleapis.com/calendar/v3/calendars/calendarId/events/eventId',
        pathParameters:'calendarId',
        queryParameters:'',
        headers:'',
        requestBody:'',
        connectorId:21
    }
];