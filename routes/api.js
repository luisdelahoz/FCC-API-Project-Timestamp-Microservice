const express = require('express');
const router = express.Router();

router.get('/timestamp/:date_string?', (req, res) => {
  const dateString = req.params['date_string'];
  let parsedDate;

  if (!dateString || dateString.trim().length === 0) {
    parsedDate = new Date();
  } else {
    parsedDate = (isNaN(dateString)) ? new Date(dateString) : new Date(+dateString);
  }

  const dateErrorMessage = 'Invalid Date';

  if (parsedDate.toString() === dateErrorMessage) {
    return res.json({
      error: dateErrorMessage
    });
  }

  return res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString()
  });
});

module.exports = router;
