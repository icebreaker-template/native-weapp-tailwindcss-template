import { icebreaker } from '@icebreakers/eslint-config'

export default icebreaker(
  {},
  {
    languageOptions: {
      globals: {
        wx: true,
        App: true,
        Page: true,
        getCurrentPages: true,
        getApp: true,
        Component: true,
        requirePlugin: true,
        requireMiniProgram: true,
      },
    },
  },
)
