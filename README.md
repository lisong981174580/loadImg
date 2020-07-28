# loadImg

图片加载方法

## Installment

```sh
npm install promise-loadimg --save
```

## Usage

```javascript
import loadimg from 'promise-loadimg';

loadimg('https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg').then(img => {
  console.log(img) // <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg">
}).catch(error => {
  // 图片加载失败
})
```
