// class EventView {
//   constructor() {
//     this.addEventInput = document.getElementById("add-event-input");
//     this.addEventBtn = document.querySelector(".add-event-form__submit");
//     this.addEventForm = document.querySelector(".add-event-form");
//     this.eventList = document.querySelector(".event-list");
//   }

//   renderEventElement(event) {
//     const { eventName, startDate, endDate, id } = event;
//     const eventItem = document.createElement("div");
//     eventItem.classList.add("event-item");
//     eventItem.id = id;

//     const eventTask = document.createElement("span");
//     eventTask.classList.add("event-item__task");
//     eventTask.textContent = task;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.classList.add("event-item__delete");
//     deleteBtn.textContent = "Delete";

//     eventItem.append(eventTask, deleteBtn);
//     this.eventList.appendChild(eventItem);
//   }

//   removeEventElement(eventId) {
//     const eventItem = document.getElementById(eventId);
//     eventItem.remove();
//   }

//   setRemainingCount(newCount) {
//     const countElem = document.getElementById("remaining-event-count");
//     countElem.textContent = newCount;
//   }
// }
// 

class EventView {
  constructor() {
    this.app = document.getElementById('event-list-app');
    this.addEventButton = document.getElementById('add-new-event-button');
    this.eventTableBody = document.getElementById('event-table-body');
  }

  displayEvents(events) {
    const { eventName, startDate, endDate, id } = events;
    this.eventTableBody.innerHTML = '';
    events.forEach((event, index) => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${event.eventName}</td>
        <td>${event.startDate}</td>
        <td>${event.endDate}</td>
        <td>
          <button class="edit-event icon-button" data-index="${index}" aria-label="Edit">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
            </svg>
          </button>
          <button class="delete-event icon-button" data-index="${index}" aria-label="Delete">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
            </svg>
          </button>
        </td>
      `;

      this.eventTableBody.appendChild(row);
    });
  }

  bindAddEvent(handler) {
    this.addEventButton.addEventListener('click', handler);
  }

  bindEditEvent(handler) {
    this.eventTableBody.addEventListener('click', event => {
      if (event.target.closest('.edit-event')) {
        const index = event.target.closest('.edit-event').dataset.index;
        handler(index);
      }
    });
  }

  bindDeleteEvent(handler) {
    this.eventTableBody.addEventListener('click', event => {
      if (event.target.closest('.delete-event')) {
        const index = event.target.closest('.delete-event').dataset.index;
        handler(index);
      }
    });
  }

  getEventRowInputs(index) {
    const row = this.eventTableBody.children[index];
    return {
      name: row.querySelector('.add-event-form__input').value,
      start: row.querySelector('input[type="date"]:first-of-type').value,
      end: row.querySelector('input[type="date"]:last-of-type').value
    };
  }

  replaceRowWithInputs(index, event) {
    const row = this.eventTableBody.children[index];
    row.innerHTML = `
      <td><input type="text" class="add-event-form__input" value="${event.name}" required></td>
      <td><input type="date" value="${event.start}" required></td>
      <td><input type="date" value="${event.end}" required></td>
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
  }
}
