const createFlightPlan = require('./createFlightPlan');
const deleteFlightPlan = require('./deleteFlightPlan');
const getFlightPlan = require('./getFlightPlan');
const listFlightPlan = require('./listFlightPlan');
const updateFlightPlan = require('./updateFlightPlan');

class FlightPlan {
  constructor(_flightPlan) {
    this.flightPlan = _flightPlan;
  }

  seriarize() {
    return ({
      id: this.id,
      geometry: JSON.parse(this.geometry),
      takeoffLatitude: this.takeoff_latitude,
      takeoffLongitude: this.takeoff_longitude,
      maxAlittudeAgl: this.max_alittude_agl,
      pilotId: this.pilot_id,
      startTime: new Date(this.start_time),
      calledAt: new Date(this.called_at),
      buffer: this.buffer,
    });
  }
}

module.exports = knex => ({
  createFlightPlan: createFlightPlan(knex, FlightPlan),
  deleteFlightPlan: deleteFlightPlan(knex, FlightPlan),
  getFlightPlan: getFlightPlan(knex, FlightPlan),
  listFlightPlan: listFlightPlan(knex, FlightPlan),
  updateFlightPlan: updateFlightPlan(knex, FlightPlan),
});
