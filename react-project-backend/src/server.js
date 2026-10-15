import express, { application } from 'express';

const materialInfo = [
  { materialName: 'taq-polymerase', quantity: 13},
  { materialName: 'blood-sample', quantity: 5},
  { materialName: 'urine-sample', quantity: 9}
]


const app = express();

app.use(express.json());

app.post('/api/laboratory/:materialName/decrement', (req, res) => { 
  const material = materialInfo.find(m => m.materialName === req.params.materialName);
  material.quantity -= 1;
  res.send('Used one: ' + req.params.materialName + '. Remaining: ' + material.quantity);
});

app.get('/hello', function(req, res)  {
  res.send('hello maam :3');
});

app.get('/hello/:name', function(req, res) {
  res.send('Hello, ' + req.params.name)
});

app.post('/hello', function(req, res){
  res.send('Helloooooo from ' + req.body.name + ' endpoint!');
});

app.listen(8000, function() {
  console.log('Server is listening on port 8000');
});