import App from './App.svelte';

// below import causes failure running build
import { hello } from "./.test/hello";

// below import is ok
// import { hello } from "./_test/hello";

hello("there")

let app = new App({
  target: document.body,
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
