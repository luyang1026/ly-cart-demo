const express = require('express');
const app = express();
app.use('/',express.static('dist'));
app.use('/static',express.static('static'));
app.use((req, res, next) => {
  res.header('access-control-allow-origin', '*');
  next();
})
app.get('/productList', (req, res) => {
  res.json(productListMock());
})
app.listen(8000, () => {
  console.log('listening on 8000');
})

function productListMock(){
  let productList = [];
  for (let i = 0; i < 10; i++){
    productList.push({
      id: i,
      name: `product-${i}`,
      // imgUrl: 'https://assets.servedby-buysellads.com/p/manage/asset/id/61450'
      imgUrl: '/static/good.jpg'
    })
  }
  return productList;
}
