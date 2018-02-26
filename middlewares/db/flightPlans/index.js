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
      id: this.flightPlan.id,
      geometry: JSON.parse(this.flightPlan.geometry),
      takeoffLatitude: this.flightPlan.takeoff_latitude,
      takeoffLongitude: this.flightPlan.takeoff_longitude,
      maxAlittudeAgl: this.flightPlan.max_alittude_agl,
      pilotId: this.flightPlan.pilot_id,
      startTime: new Date(this.flightPlan.start_time),
      calledAt: new Date(this.flightPlan.called_at),
      buffer: this.flightPlan.buffer,
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
