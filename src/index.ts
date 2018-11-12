/**
 * ping 域名
 * @param host 域名
 * @param image 图片地址，默认图标
 */
function ping(host: string, timeout?: number): Promise<any>;

/**
 * ping 域名
 * @param host 域名
 * @param image 图片地址，默认图标
 * @param timeout 超时(毫秒)
 */
function ping(host: string, image: string, timeout?: number): Promise<any>;

function ping(
  host: string,
  image: string | number = '/favicon.ico',
  timeout = 0,
): Promise<any> {
  host = host.replace(/^(?!https?:\/\/)(\/\/)?/, 'http://').replace(/\/$/, '');

  if (typeof image === 'number') {
    timeout = image;
    image = '/favicon.ico';
  }

  image = image.replace(/^(?!\/)/, '/');

  return new Promise((resolve) => {
    let timer: any;

    if (timeout) {
      timer = setTimeout(() => resolve(false), timeout);
    }

    function done(err: any) {
      if (timer) {
        clearTimeout(timer);
      }

      if (err.type === 'error') {
        resolve(false);
      } else {
        resolve(true);
      }
    }

    const img = new Image();
    img.onload = done;
    img.onerror = done;
    img.src = `${host}${image}?${+new Date()}`;
  });
}

export default ping;
