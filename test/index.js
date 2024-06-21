const API_URL = "http://localhost:3000/events";
// Initialize the MVC components
// const app = new EventController(new EventModel(), new EventView());
const eventView = new EventView();
const eventModel = new EventModel();
const eventController = new EventController(eventModel, eventView);
