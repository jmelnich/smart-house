const express = require('express');
const logsService = require('../services/logs');

const router = express.Router();

router.get('/devices/:id', async (req, res) => {
  const { id } = req.params;
  const deviceLog = await logsService.getLogByDeviceId(id);
  res.json(deviceLog);

});

module.exports = router;
