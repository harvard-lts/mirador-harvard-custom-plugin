import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import harvardBranding from '../src/plugins/harvardBranding.jsx';

describe('harvardBranding plugin', () => {
  it('exposes the Branding wrap descriptor', () => {
    expect(harvardBranding.target).toBe('Branding');
    expect(harvardBranding.mode).toBe('wrap');
    expect(typeof harvardBranding.component).toBe('function');
  });

  it('renders the Harvard shield image', () => {
    const { component: HarvardBranding } = harvardBranding;
    const { container } = render(<HarvardBranding />);
    const img = container.querySelector('img');
    expect(img).not.toBeNull();
    expect(img.getAttribute('height')).toBe('40px');
    expect(img.getAttribute('width')).toBe('40px');
  });
});
