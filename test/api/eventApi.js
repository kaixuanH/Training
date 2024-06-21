// const eventAPI = (() => {
//   const BASE_EVENT_API = "http://localhost:3000/events";
//   const fetchEventsAPI = async () => {
//     return fetch(BASE_EVENT_API).then((res) => res.json());
//   };

//   const postEventAPI = async (newEvent) => {
//     return fetch(BASE_EVENT_API, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newEvent),
//     }).then((res) => res.json());
//   };

//   const deleteEventAPI = async (eventId) => {
//     return fetch(`${BASE_event_API}/${eventId}`, {
//       method: "DELETE",
//     }).then((res) => res.json());
//   };

//   return {
//     fetchEventsAPI,
//     postEventAPI,
//     deleteEventAPI,
//   };
// })();

