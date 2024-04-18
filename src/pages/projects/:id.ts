import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { BeforeEnterObserver, RouterLocation } from '@vaadin/router'

@customElement('project-detail-page')
export class ProjectNewPage extends LitElement implements BeforeEnterObserver {
  @property({ type: Number })
  projectId = 0

  onBeforeEnter(location: RouterLocation) {
    console.log({ location })
    this.projectId = Number(location.params?.id)
  }

  protected firstUpdated() {
    console.log('first update')
  }

  render() {
    return html`<h1>Project Detail ${this.projectId}</h1>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'project-detail-page': ProjectNewPage
  }
}
