import './app.css'
import App from './App.svelte'
import Container from './Container.svelte'

const app = new App({
  target: document.getElementById('app')
})

/* const app = new Container({
  target: document.getElementById('app')
})
 */
export default app
