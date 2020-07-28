/**
 * 图片加载函数
 */
export default function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');

    img.onload = () => {
      resolve(img);
    }

    img.onerror = () => {
      reject(new Error(`图片加载失败 ${src}`));
    }

    img.src = src;
  })
}
