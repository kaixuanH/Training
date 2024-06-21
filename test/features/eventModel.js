//eventModel.js
class EventModel {
  constructor() {
    this.events = [];
    this.apiUrl = "http://localhost:3000/events";
  }

  async fetchEvents() {
    const response = await fetch(this.apiUrl);
    this.events = await response.json();
    return this.events;
  }

  async addEvent(event) {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });
    const newEvent = await response.json();
    this.events.push(newEvent);
  }

  async updateEvent(index, updatedEvent) {
    const event = this.events[index];
    const response = await fetch(`${this.apiUrl}/${event.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedEvent)
    });
    this.events[index] = await response.json();
  }

  async removeEvent(index) {
    const event = this.events[index];
    await fetch(`${this.apiUrl}/${event.id}`, {
      method: 'DELETE'
    });
    this.events.splice(index, 1);
  }

  getEvents() {
    return this.events;
  }
}

