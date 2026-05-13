import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';

vi.mock('../../src/images/harvardShield.png', () => ({
  default: 'harvard-shield-stub.png',
}));

import harvardBranding from '../../src/plugins/harvardBranding';

const Component = harvardBranding.component;

describe('harvardBranding plugin export shape', () => {
  it('matches the v4 wrap-mode plugin shape', () => {
    expect(harvardBranding).toMatchObject({
      target: 'Branding',
      mode: 'wrap',
    });
    expect(harvardBranding.component).toBeTypeOf('function');
  });
});

describe('harvardBranding component render', () => {
  it('renders an img tag with the Harvard shield asset', () => {
    const { container } = render(<Component />);
    const img = container.querySelector('img');

    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toBe('harvard-shield-stub.png');
    expect(img.getAttribute('height')).toBe('40px');
    expect(img.getAttribute('width')).toBe('40px');
  });

  it('wraps the shield in the legacy Mirador branding class', () => {
    const { container } = render(<Component />);
    const wrapper = container.querySelector(
      '.WithPlugins\\(WorkspaceControlPanel\\)-branding-2',
    );

    expect(wrapper).not.toBeNull();
    expect(wrapper.querySelector('img')).not.toBeNull();
  });
});
