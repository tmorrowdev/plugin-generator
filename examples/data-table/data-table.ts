import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  Cre8Table,
  Cre8TableHeader,
  Cre8TableHeaderCell,
  Cre8TableBody,
  Cre8TableRow,
  Cre8TableCell,
  Cre8List,
  Cre8ListItem,
  Cre8Chart,
  Cre8Card,
} from '@cre8_dev/cre8-wc';

/**
 * DataTable Data Display Pattern
 * A reusable data display pattern using Cre8-Components
 */
@customElement('data-table-data-display')
export class DataTableDataDisplay extends LitElement {
  @property({ type: String }) variant: 'table' | 'list' | 'chart' | 'cards' =
    'table';
  @property({ type: Array }) data: Array<Record<string, any>> = [];
  @property({ type: Array }) columns: Array<{ key: string; label: string }> =
    [];

  static styles = css`
    :host {
      display: block;
    }

    .data-display-wrapper {
      width: 100%;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
    }

    .loading {
      display: flex;
      justify-content: center;
      padding: 2rem;
    }

    .empty {
      text-align: center;
      padding: 2rem;
      color: var(--cre8-color-text-secondary, #666);
    }
  `;

  render() {
    if (!this.data || this.data.length === 0) {
      return html`
        <div class="data-display-wrapper">
          <div class="empty">
            <p>No data available</p>
          </div>
        </div>
      `;
    }

    if (this.variant === 'list') {
      return html`
        <div class="data-display-wrapper">
          <cre8-list>
            ${this.data.map(
              (item) => html`
                <cre8-list-item> ${this.renderListItem(item)} </cre8-list-item>
              `
            )}
          </cre8-list>
        </div>
      `;
    }

    if (this.variant === 'chart') {
      return html`
        <div class="data-display-wrapper">
          <cre8-chart
            .data="${this.prepareChartData()}"
            type="bar"
          ></cre8-chart>
        </div>
      `;
    }

    if (this.variant === 'cards') {
      return html`
        <div class="data-display-wrapper">
          <div class="cards-grid">
            ${this.data.map(
              (item) => html`
                <cre8-card> ${this.renderCardContent(item)} </cre8-card>
              `
            )}
          </div>
        </div>
      `;
    }

    // Default table view
    return html`
      <div class="data-display-wrapper">
        <cre8-table>
          <cre8-table-header>
            ${this.columns.map(
              (column) => html`
                <cre8-table-header-cell>${column.label}</cre8-table-header-cell>
              `
            )}
          </cre8-table-header>
          <cre8-table-body>
            ${this.data.map(
              (row) => html`
                <cre8-table-row>
                  ${this.columns.map(
                    (column) => html`
                      <cre8-table-cell>
                        ${this.formatCellValue(row[column.key])}
                      </cre8-table-cell>
                    `
                  )}
                </cre8-table-row>
              `
            )}
          </cre8-table-body>
        </cre8-table>
      </div>
    `;
  }

  private renderListItem(item: Record<string, any>) {
    return html`
      <div>
        ${Object.entries(item).map(
          ([key, value]) => html`
            <div><strong>${key}:</strong> ${this.formatCellValue(value)}</div>
          `
        )}
      </div>
    `;
  }

  private renderCardContent(item: Record<string, any>) {
    const entries = Object.entries(item);
    const title = entries[0]?.[1] || 'Item';

    return html`
      <h3>${title}</h3>
      ${entries
        .slice(1)
        .map(
          ([key, value]) => html`
            <p><strong>${key}:</strong> ${this.formatCellValue(value)}</p>
          `
        )}
    `;
  }

  private formatCellValue(value: any): string {
    if (value === null || value === undefined) return '-';
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
  }

  private prepareChartData() {
    // Simple chart data preparation - customize based on your needs
    return {
      labels: this.data.map((_, index) => `Item ${index + 1}`),
      datasets: [
        {
          label: 'Data',
          data: this.data.map((item) => {
            const numericValues = Object.values(item).filter(
              (v) => typeof v === 'number'
            );
            return numericValues[0] || 0;
          }),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'data-table-data-display': DataTableDataDisplay;
  }
}
