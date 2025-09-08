import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {DashboardLayoutLayout} from '../../../examples';
@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  version = 'STARTING';

  render() {
    return html`
     <dashboard-layout-layout variant="sidebar" with-container>
  <nav slot="sidebar">Navigation content</nav>
  <header slot="header">Page header</header>
  <main slot="main">Main content</main>
  <footer slot="footer">Footer content</footer>
</dashboard-layout-layout>
    `;
  }
}