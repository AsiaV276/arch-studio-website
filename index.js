const express = require('express')
const PORT = process.env.PORT || 5000
const app = express();

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
app.use(express.static('public'));
  
//app.get('/', (req, res) => res.render('pages/index'))




