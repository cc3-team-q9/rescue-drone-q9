const express = require('express');

const router = express.Router();

module.exports = (middlewares) => {
  const { db } = middlewares;

  router.post('', async (req, res) => {
    const message = { ...req.body };

    try {
      const insertedMessage = await db.messages.createMessage(message);
      res.status(201).json(insertedMessage);
    } catch (error) {
      res.send(500, error.message);
    }
  });

  router.get('', async (req, res) => {
    try {
      const messages = await db.messages.listMessage();
      res.status(200).json(messages);
    } catch (error) {
      res.send(500, error.message);
    }
  });

  router.get('/:id', async (req, res) => {
    const id = { ...req.params };

    try {
      const messages = await db.messages.getMessage(id);
      res.status(200).json(messages);
    } catch (error) {
      res.send(500, error.message);
    }
  });


  router.put('/:id', async (req, res) => {
    const id = { ...req.params };
    const updateContents = { ...req.body };

    try {
      const updatedMessage = await db.messages.updateMessage({ id, updateContents });
      res.status(202).json(updatedMessage);
    } catch (error) {
      res.send(500, error.message);
    }
  });

  router.delete('/:id', async (req, res) => {
    const id = { ...req.params };

    try {
      const success = await db.messages.deleteMessage(id);
      res.status(202).send(success);
    } catch (error) {
      res.send(500, error.message);
    }
  });

  return router;
};
