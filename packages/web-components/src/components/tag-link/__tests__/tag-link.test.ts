/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, render } from 'lit-html';
import ifNonNull from '../../../internal/vendor/@carbon/web-components/globals/directives/if-non-null.js';
import '../tag-link';

const template = (props?) => {
  const { copy, href } = props ?? {};
  return html`
    <dds-tag-link href="${ifNonNull(href)}"> ${copy} </dds-tag-link>
  `;
};

describe('dds-tag-link', function () {
  describe('Misc attributes', function () {
    it('should render with minimum attributes', async function () {
      render(template(), document.body);
      await Promise.resolve(); // Update cycle for `<dds-tag-link>`
      expect(document.body.querySelector('dds-tag-link')).toMatchSnapshot({
        mode: 'shadow',
      });
    });

    it('should render with various attributes', async function () {
      render(
        template({
          copy: 'copy-foo',
          href: 'https://example.com',
        }),
        document.body
      );
      await Promise.resolve(); // Update cycle for `<dds-tag-link>`
      expect(document.body.querySelector('dds-tag-link')).toMatchSnapshot({
        mode: 'shadow',
      });
    });
  });
  afterEach(async function () {
    await render(undefined!, document.body);
  });
});
