import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import copyrightLabel from '../src/plugins/copyrightLabel.js';

describe('copyrightLabel plugin', () => {
  it('exposes the AttributionPanel add descriptor', () => {
    expect(copyrightLabel.target).toBe('AttributionPanel');
    expect(copyrightLabel.mode).toBe('add');
    expect(typeof copyrightLabel.component).toBe('function');
  });

  it('renders nothing and rewrites attribution labels on mount', () => {
    document.body.innerHTML = `
      <span class="MuiTypography-root MuiTypography-subtitle2">License</span>
      <span><a>https://example.com/license</a></span>
    `;

    const { component: CopyrightLabel } = copyrightLabel;
    const { container } = render(<CopyrightLabel />);
    expect(container.firstChild).toBeNull();

    const link = document.querySelector('span + span a');
    expect(link.textContent).toBe('Copyright & Terms of Use');
  });
});
