const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
  const lang = req.headers['accept-language'];
  const os = req.headers['user-agent'];

  const language = lang.substring(0, lang.indexOf(','));
  const software = os.substring(os.indexOf('(') + 1, os.indexOf(')'));

  res.send(
    {
      "ipaddress": req.ip,
      "language": language,
      "software": software,
    }
  )
})

app.listen(app.get('port'), () => {
  console.log('listening on port', app.get('port'));
});
