/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { boolean, text, select } from '@storybook/addon-knobs';
import { ifDefined } from 'lit/directives/if-defined.js';
import readme from './README.stories.mdx';
import '../video-player-container';
import '../../lightbox-media-viewer/lightbox-video-player-container';
import { enumValsToArray } from '../../../globals/internal/enum-helpers';
import { BUTTON_POSITION } from '../defs';

export const Default = (args) => {
  const { caption, hideCaption, thumbnail, videoId } = args?.VideoPlayer ?? {};
  return html`
    <c4d-video-player-container-v7
      playing-mode="inline"
      video-id=${videoId}
      caption=${caption}
      ?hide-caption=${hideCaption}
      thumbnail=${thumbnail}></c4d-video-player-container-v7>
  `;
};

export const aspectRatio1x1 = (args) => {
  const { aspectRatio, caption, hideCaption, thumbnail, videoId } =
    args?.VideoPlayer ?? {};
  return html`
    <c4d-video-player-container-v7
      playing-mode="inline"
      video-id=${videoId}
      caption=${caption}
      ?hide-caption=${hideCaption}
      aspect-ratio=${aspectRatio}
      thumbnail=${thumbnail}></c4d-video-player-container-v7>
  `;
};

export const aspectRatio4x3 = (args) => {
  const { aspectRatio, caption, hideCaption, thumbnail, videoId } =
    args?.VideoPlayer ?? {};
  return html`
    <c4d-video-player-container-v7
      playing-mode="inline"
      video-id=${videoId}
      aspect-ratio=${aspectRatio}
      caption=${caption}
      ?hide-caption=${hideCaption}
      thumbnail=${thumbnail}></c4d-video-player-container-v7>
  `;
};

export const withLightboxMediaViewer = (args) => {
  const {
    aspectRatio,
    caption,
    hideCaption,
    thumbnail,
    videoId,
    customVideoDescription,
  } = args?.VideoPlayer ?? {};
  return html`
    <c4d-video-player-container-v7
      video-id=${videoId}
      aspect-ratio=${aspectRatio}
      caption=${caption}
      video-description="${ifDefined(customVideoDescription)}"
      ?hide-caption=${hideCaption}
      thumbnail=${thumbnail}
      playing-mode="lightbox">
    </c4d-video-player-container-v7>
    <c4d-lightbox-video-player-container></c4d-lightbox-video-player-container>
  `;
};

export const autoplay = (args) => {
  const { aspectRatio, caption, hideCaption, thumbnail, videoId } =
    args?.VideoPlayer ?? {};
  return html`
    <c4d-video-player-container-v7
      auto-play
      playing-mode="inline"
      video-id=${videoId}
      aspect-ratio=${aspectRatio}
      caption=${caption}
      ?hide-caption=${hideCaption}
      thumbnail=${thumbnail}></c4d-video-player-container-v7>
  `;
};

export const autoplayMuted = (args) => {
  const { caption, hideCaption, thumbnail, videoId } = args?.VideoPlayer ?? {};
  return html`
    <style>
      c4d-video-player-container-v7[background-mode] {
        display: block;
        aspect-ratio: 16/9;
        outline: 2px solid red;
      }
    </style>
    <c4d-video-player-container-v7
      auto-play
      muted
      playing-mode="inline"
      video-id=${videoId}
      caption=${caption}
      ?hide-caption=${hideCaption}
      thumbnail=${thumbnail}></c4d-video-player-container-v7>
  `;
};

export const ambient = (args) => {
  const { videoId } = args?.VideoPlayer ?? {};
  return html`
    <style>
      c4d-video-player-container-v7[background-mode] {
        display: block;
        aspect-ratio: 16/9;
        outline: 2px solid red;
        outline-offset: -2px;
      }
    </style>
    <c4d-video-player-container-v7
      background-mode
      video-id=${videoId}></c4d-video-player-container-v7>
  `;
};

export const ambientMultiple = (args) => {
  const { videoId } = args?.VideoPlayer ?? {};
  return html`
    <style>
      p {
        padding-bottom: 1rem;
        padding-top: 2rem;
      }
      p:first-of-type {
        padding-top: 0 !important;
      }
      c4d-video-player-container-v7[background-mode] {
        display: block;
        aspect-ratio: 16/9;
        outline: 2px solid red;
        outline-offset: -2px;
      }
    </style>

    <p>Variable Media ID: ${videoId}</p>
    <c4d-video-player-container-v7
      background-mode
      video-id=${videoId}></c4d-video-player-container-v7>

    <p>Fixed Media ID: 1_9h94wo6b</p>
    <c4d-video-player-container-v7
      background-mode
      video-id='1_9h94wo6b'></c4d-video-player-container-v7>

    <p>Fixed Media ID: 1_p2osmd1z</p>
    <c4d-video-player-container-v7
      background-mode
      video-id='1_p2osmd1z'></c4d-video-player-container-v7>
  `;
};

export const intersectionMode = (args) => {
  const {
    aspectRatio,
    caption,
    hideCaption,
    thumbnail,
    videoId,
    buttonPosition,
  } = args?.VideoPlayer ?? {};
  return html` <c4d-video-player-container-v7
    aspect-ratio="${aspectRatio}"
    playing-mode="inline"
    video-id=${videoId}
    caption=${caption}
    ?hide-caption=${hideCaption}
    thumbnail=${thumbnail}
    intersection-mode
    button-position="${buttonPosition}"></c4d-video-player-container-v7>`;
};

aspectRatio4x3.story = {
  name: 'Aspect ratio 4:3',
  parameters: {
    knobs: {
      VideoPlayer: () => {
        return {
          aspectRatio: '4x3',
          caption: text('Custom caption (caption):', ''),
          hideCaption: boolean('Hide caption (hideCaption):', false),
          thumbnail: text('Custom thumbnail (thumbnail):', ''),
          videoId: text('Video ID', '1_p2osmd1z'),
        };
      },
    },
    propsSet: {
      default: {
        VideoPlayer: {
          aspectRatio: '4x3',
          caption: '',
          hideCaption: false,
          thumbnail: '',
          videoId: '1_p2osmd1z',
        },
      },
    },
  },
};

aspectRatio1x1.story = {
  name: 'Aspect ratio 1:1',
  parameters: {
    knobs: {
      VideoPlayer: () => {
        return {
          aspectRatio: '1x1',
          caption: text('Custom caption (caption):', ''),
          hideCaption: boolean('Hide caption (hideCaption):', false),
          thumbnail: text('Custom thumbnail (thumbnail):', ''),
          videoId: text('Video ID', '1_9h94wo6b'),
        };
      },
    },
    propsSet: {
      default: {
        VideoPlayer: {
          aspectRatio: '1x1',
          caption: '',
          hideCaption: false,
          thumbnail: '',
          videoId: '1_9h94wo6b',
        },
      },
    },
  },
};

withLightboxMediaViewer.story = {
  name: 'With lightbox media viewer',
  parameters: {
    knobs: {
      VideoPlayer: () => {
        return {
          aspectRatio: '16x9',
          customVideoDescription: text(
            'Custom video description',
            'This is a custom video description.'
          ),
          caption: text('Custom caption (caption):', ''),
          hideCaption: boolean('Hide caption (hideCaption):', false),
          thumbnail: text('Custom thumbnail (thumbnail):', ''),
          videoId: text('Video ID', '0_ibuqxqbe'),
        };
      },
    },
    propsSet: {
      default: {
        VideoPlayer: {
          aspectRatio: '16x9',
          customVideoDescription: 'This is a custom video description',
          caption: '',
          hideCaption: false,
          thumbnail: '',
          videoId: '0_ibuqxqbe',
        },
      },
    },
  },
};

autoplay.story = {
  name: 'Autoplay',
  parameters: {
    knobs: {
      VideoPlayer: () => {
        return {
          aspectRatio: '4x3',
          caption: text('Custom caption (caption):', ''),
          hideCaption: boolean('Hide caption (hideCaption):', false),
          thumbnail: text('Custom thumbnail (thumbnail):', ''),
          videoId: text('Video ID', '1_p2osmd1z'),
        };
      },
    },
    propsSet: {
      default: {
        VideoPlayer: {
          aspectRatio: '4x3',
          caption: '',
          hideCaption: false,
          thumbnail: '',
          videoId: '1_p2osmd1z',
        },
      },
    },
  },
};

autoplayMuted.story = {
  name: 'Autoplay muted',
  parameters: {
    knobs: {
      VideoPlayer: () => {
        return {
          aspectRatio: '4x3',
          caption: text('Custom caption (caption):', ''),
          hideCaption: boolean('Hide caption (hideCaption):', false),
          thumbnail: text('Custom thumbnail (thumbnail):', ''),
          videoId: text('Video ID', '1_p2osmd1z'),
        };
      },
    },
    propsSet: {
      default: {
        VideoPlayer: {
          aspectRatio: '4x3',
          caption: '',
          hideCaption: false,
          thumbnail: '',
          videoId: '1_p2osmd1z',
        },
      },
    },
  },
};

ambient.story = {
  name: 'Ambient',
  parameters: {
    knobs: {
      VideoPlayer: () => {
        return {
          videoId: text('Video ID', '1_p2osmd1z'),
        };
      },
    },
    propsSet: {
      default: {
        VideoPlayer: {
          videoId: '1_p2osmd1z',
        },
      },
    },
  },
};

ambientMultiple.story = {
  name: 'Ambient - Multiple',
  parameters: {
    knobs: {
      VideoPlayer: () => {
        return {
          videoId: text('Video ID', '1_mq9h9c34'),
        };
      },
    },
    propsSet: {
      default: {
        VideoPlayer: {
          videoId: '1_mq9h9c34',
        },
      },
    },
  },
};

intersectionMode.story = {
  name: 'Intersection mode',
  decorators: [
    (story) => html`
      <p>
        Scroll down ⬇️<br />
        To illustrate playback beginning only when the video comes into view,
        we've added intentional space to push the video below the fold.
      </p>
      <div style="margin-top: 120vh;">${story()}</div>
    `,
  ],
  parameters: {
    knobs: {
      VideoPlayer: () => {
        return {
          aspectRatio: '16x9',
          caption: text('Custom caption (caption):', ''),
          hideCaption: boolean('Hide caption (hideCaption):', false),
          thumbnail: text('Custom thumbnail (thumbnail):', ''),
          videoId: text('Video ID', '1_mq9h9c34'),
          buttonPosition: select(
            'Button position (buttonPosition)',
            enumValsToArray(BUTTON_POSITION),
            BUTTON_POSITION.BOTTOM_RIGHT
          ),
        };
      },
    },
    propsSet: {
      default: {
        VideoPlayer: {
          aspectRatio: '16x9',
          caption: '',
          hideCaption: false,
          thumbnail: '',
          videoId: '1_mq9h9c34',
        },
      },
    },
  },
};

export default {
  title: 'Components/Video player V7',
  decorators: [
    (story) => html`
      <div class="cds--grid">
        <div class="cds--row">
          <div class="cds--col-sm-4 cds--col-lg-8">${story()}</div>
        </div>
      </div>
    `,
  ],
  parameters: {
    ...readme.parameters,
    hasStoryPadding: true,
    knobs: {
      VideoPlayer: () => ({
        caption: text('Custom caption (caption):', ''),
        hideCaption: boolean('Hide caption (hideCaption):', false),
        thumbnail: text('Custom thumbnail (thumbnail):', ''),
        videoId: '1_mq9h9c34',
      }),
    },
    propsSet: {
      default: {
        VideoPlayer: {
          caption: '',
          hideCaption: false,
          thumbnail: '',
          videoId: '1_mq9h9c34',
        },
      },
    },
    percy: {
      skip: true,
    },
  },
};
