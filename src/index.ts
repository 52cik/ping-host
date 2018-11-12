/**
 * ping host
 * @param host host name
 * @param image image url, default favicon.ico
 */
function ping(host: string, timeout?: number): Promise<boolean>;

/**
 * ping host
 * @param host host name
 * @param image image url, default favicon.ico
 * @param timeout timeout (ms)
 */
function ping(host: string, image: string, timeout?: number): Promise<boolean>;

/**
 * ping host
 * @param host host name
 * @param image image url, default favicon.ico
 * @param timeout timeout (ms)
 */
function ping(
  host: string,
  image: string | number = '/favicon.ico',
  timeout = 0,
): Promise<boolean> {
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
