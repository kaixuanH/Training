// eventController.js

// class EventController {
//   #model;
//   #view;
//   constructor(model, view) {
//     this.#model = model;
//     this.#view = view;
//     this.initApp();
//   }

//   initApp() {
//     this.setUpEvents();
//     this.fetchEvents();
//   }

//   setUpEvents() {
//     this.setUpDeleteEvent();
//     this.setUpAddEvent();
//   }

//   fetchEvents() {
//     eventAPI.fetchEventsAPI().then((Events) => {
//       this.#model.setEvents(Events);
//       this.#view.setRemainingCount(this.#model.length);
//       Events.forEach((Event) => {
//         this.#view.renderEventElement(Event);
//       });
//     });
//   }

//   setUpAddEvent() {
//     this.#view.addEventForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const newEvent = {
//         task: this.#view.addEventInput.value,
//       };

//       eventAPI.postEventAPI(newEvent).then((_newEvent) => {
//         this.#model.addEvent(_newEvent);
//         this.#view.setRemainingCount(this.#model.length);
//         this.#view.renderEventElement(_newEvent);
//       });
//     });
//   }


class EventController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();

    this.view.bindAddEvent(this.handleAddEvent.bind(this));
    this.view.bindEditEvent(this.handleEditEvent.bind(this));
    this.view.bindDeleteEvent(this.handleDeleteEvent.bind(this));
  }

  async init() {
    const events = await this.model.fetchEvents();
    this.view.displayEvents(events);
  }

  handleAddEvent() {
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
      <td><input type="text" class="add-event-form__input" required></td>
      <td><input type="date" required></td>
      <td><input type="date" required></td>
      <td>
        <button class="save-event icon-button" aria-label="Save">
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21,20V8.414a1,1,0,0,0-.293-.707L16.293,3.293A1,1,0,0,0,15.586,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20ZM9,8h4a1,1,0,0,1,0,2H9A1,1,0,0,1,9,8Zm7,11H8V15a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z"/>
          </svg>
        </button>
        <button class="delete-event icon-button" aria-label="Cancel">
          <svg focusable="false" aria-hidden="true" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
          </svg>
        </button>
      </td>
    `;

    this.view.eventTableBody.appendChild(newRow);

    const saveButton = newRow.querySelector('.save-event');
    const deleteButton = newRow.querySelector('.delete-event');

    saveButton.addEventListener('click', async () => {
      const eventName = newRow.querySelector('.add-event-form__input').value;
      const startDate = newRow.querySelector('input[type="date"]:first-of-type').value;
      const endDate = newRow.querySelector('input[type="date"]:last-of-type').value;

      if (eventName && startDate && endDate) {
        await this.model.addEvent({ name: eventName, start: startDate, end: endDate });
        this.view.displayEvents(this.model.getEvents());
      } else {
        alert('Please fill out all required fields.');
      }
    });

    deleteButton.addEventListener('click', () => {
      newRow.remove();
    });
  }

  async handleEditEvent(index) {
    const event = this.model.getEvents()[index];
    this.view.replaceRowWithInputs(index, event);

    const row = this.view.eventTableBody.children[index];
    const saveButton = row.querySelector('.save-event');
    const deleteButton = row.querySelector('.delete-event');

    saveButton.addEventListener('click', async () => {
      const updatedEvent = {
        name: row.querySelector('.add-event-form__input').value,
        start: row.querySelector('input[type="date"]:first-of-type').value,
        end: row.querySelector('input[type="date"]:last-of-type').value,
      };

      if (updatedEvent.name && updatedEvent.start && updatedEvent.end) {
        await this.model.updateEvent(index, updatedEvent);
        this.view.displayEvents(this.model.getEvents());
      } else {
        alert('Please fill out all required fields.');
      }
    });

    deleteButton.addEventListener('click', async () => {
      await this.model.removeEvent(index);
      this.view.displayEvents(this.model.getEvents());
    });
  }

  async handleDeleteEvent(index) {
    await this.model.removeEvent(index);
    this.view.displayEvents(this.model.getEvents());
  }
}


