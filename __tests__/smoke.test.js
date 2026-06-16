import { describe, it, expect } from 'vitest';
import plugins, { copyrightLabel, harvardBranding } from '../src/index.js';

describe('mirador-harvard-custom-plugin smoke test', () => {
  it('exports the harvard custom plugins', () => {
    expect(copyrightLabel).toBeDefined();
    expect(harvardBranding).toBeDefined();
  });

  it('exports an array of plugins as the default export', () => {
    expect(Array.isArray(plugins)).toBe(true);
    expect(plugins).toHaveLength(2);
    expect(plugins).toContain(copyrightLabel);
    expect(plugins).toContain(harvardBranding);
  });

  it('configures each plugin with a target and component', () => {
    plugins.forEach((plugin) => {
      expect(typeof plugin.target).toBe('string');
      expect(plugin.target.length).toBeGreaterThan(0);
      expect(plugin.component).toBeDefined();
    });
  });

  it('registers the copyright label plugin against the attribution panel', () => {
    expect(copyrightLabel.target).toBe('AttributionPanel');
    expect(copyrightLabel.mode).toBe('add');
    expect(copyrightLabel.component).toBeDefined();
  });

  it('registers the harvard branding plugin against the branding area', () => {
    expect(harvardBranding.target).toBe('Branding');
    expect(harvardBranding.mode).toBe('wrap');
    expect(harvardBranding.component).toBeDefined();
  });
});
