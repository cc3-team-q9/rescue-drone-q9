const express = require('express');

const router = express.Router();

module.exports = (middlewares) => {
  const { db } = middlewares;

  router.post('', async (req, res) => {
    const flightPlan = { ...req.body };

    try {
      const insertedFlightPlan = await db.flightPlans.createFlightPlan(flightPlan);
      res.status(201).json(insertedFlightPlan);
    } catch (error) {
      res.send(500, error.message);
    }
  });

  router.get('', async (req, res) => {
    try {
      const flightPlans = await db.flightPlans.listFlightPlan();
      res.status(200).json(flightPlans);
    } catch (error) {
      res.send(500, error.message);
    }
  });

  router.get('/:id', async (req, res) => {
    const id = { ...req.params };

    try {
      const flightPlan = await db.flightPlans.getFlightPlan(id);
      res.status(200).json(flightPlan);
    } catch (error) {
      res.send(500, error.message);
    }
  });


  router.put('/:id', async (req, res) => {
    const id = { ...req.params };
    const updateContents = { ...req.body };

    try {
      const updatedFlightPlan = await db.flightPlans.updateFlightPlan({ id, updateContents });
      res.status(202).json(updatedFlightPlan);
    } catch (error) {
      res.send(500, error.message);
    }
  });

  router.delete('/:id', async (req, res) => {
    const id = { ...req.params };

    try {
      const success = await db.flightPlans.deleteFlightPlan(id);
      res.status(202).send(success);
    } catch (error) {
      res.send(500, error.message);
    }
  });

  return router;
};
