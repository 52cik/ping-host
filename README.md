# ping-host

> Browser ping host tool.


## Usage

```sh
$ yarn add ping-host
```

```js
import ping from 'ping-host';

await ping('taobao.com');
await ping('github.com', 'fluidicon.png');
await ping('github.com', 5000);
await ping('github.com', 'fluidicon.png', 3000);
```

or

```html
<script src="https://unpkg.com/ping-host"></script>
<script>
const ret = await ping('taobao.com');
// or
ping('taobao.com').then(ret => console.log(ret));
</script>
```
