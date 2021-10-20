import express from 'express';
import cors from 'cors'
import compression from 'compression'

const app = express();

app.use('/', express.static('dist'));
app.use(express.json())
app.use(cors());
app.use(compression());

app.get('/artworks', (req, res) => {
  // console.log(req.query)
  
});

app.get('/favorites', (req, res) => {
  
});

app.post('/favorites', (req, res) => {

})
  

const port = process.env.PORT || 9000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App started on port ${port}`);
})

export default app