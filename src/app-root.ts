import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Router } from '@vaadin/router'

@customElement('app-root')
export class AppRoot extends LitElement {
  protected firstUpdated() {
    const router = new Router(this.shadowRoot!.querySelector('#router'))

    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/projects/new', component: 'project-new-page' },
      { path: '/projects/:id', component: 'project-detail-page' },
      { path: '(.*)', component: 'not-found-page' },
    ])
  }

  render() {
    return html` <nav>
        <a href="/">Home</a>
        <a href="/projects/new">New Project</a>
        <a href="/projects/3">Project 3</a>
        <a href="/thispagedoesntexist">404</a>
      </nav>
      <div id="router"></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot
  }
}
