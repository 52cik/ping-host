/**
 * ping host
 * @param host host name
 * @param image image url, default favicon.ico
 */
declare function ping(host: string, timeout?: number): Promise<boolean>;
/**
 * ping host
 * @param host host name
 * @param image image url, default favicon.ico
 * @param timeout timeout (ms)
 */
declare function ping(host: string, image: string, timeout?: number): Promise<boolean>;
export default ping;
