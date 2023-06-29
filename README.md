# BLOG - GOLDENOWL

BLOG - GOLDENOWL

## Prerequisite

### yarn

```bash
npm install -g yarn
```

**Note: -g is global install. If yarn is installed, skip this step**

### Installation

```bash
yarn
```

### Environment variables

**Create .env file:**

```
nano .env
```

**.env**

```
NODE_ENV=
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_IMAGE_URL=
NEXT_PUBLIC_CLOUDINARY_IMAGE_PATH=
NEXT_PUBLIC_SITE_URL=
```

**Note:** Please ask another dev to get access to the env vars in these files.

### Run environment

**Development mode**

```bash
yarn dev
```

**Production mode**

```bash
yarn build
```

```bash
yarn start
```

### Storybook

**To run storybook**

```
yarn storybook
```

Storybook file must be in /`src`/`components`/`<component>`/`*.stories.tsx`

Storybook is a tool for UI development. It makes development faster and easier by isolating components.
Check the [document](https://storybook.js.org/docs/react/get-started/introduction) to get you started!

### Jest Test

**To run test for file**

```
yarn test <file>
```

**To run test coverage all file**

```
yarn test -- --coverage
```

**To run test coverage only components folder**

```
yarn test -u -- --coverage --watchAll=false --collectCoverageFrom="./src/components/**/*.js"
```

Test file must be in /src/`__tests__`

Test file must have extension .test.ts(x)

Check the [Jest document](https://jestjs.io/docs/getting-started) to get you started!

### Cypress (End to end testing)

**To run cypress**

```
yarn run cypress open
```

Then you can see **'end to end test'**, click it to run end to end test

Test file must be in /cypress/e2e/

Create file with \*.cy.js in /cypress/e2e/ to create a new end to end test.

Check the [Jest document](https://docs.cypress.io/guides/getting-started/installing-cypress) to get you started!

## Deployment

**Deployed on Vercel:**
Contact your team to join Vercel team. Then go to `Site setting/Build & deploy` to config stating and production deploy

**Staging:** Auto deploy & generate a different domain to test after PR

**Production:** [Production](https://blogowl.vercel.app//)

## Database Diagram

[![](https://mermaid.ink/img/pako:eNqFU8tugzAQ_BXL5_AD3NIURZGSIiVUUSsuBm-IK3uN_GhVkfx7HQhFiqnq02pmWHbG647WmgNNaZIkJTrhJKTkaZuv8-OWHLOnw6bISuxJMM-CNYapEkk4r4dsTy6XJNEdWe6LzWqbpeTMbMyu8t0ueyke2W6ob8c6I7Ah3oJBpiAiZkFQTMgIbY3-FBxMTDBrv7ThE1FpLYEhqTWehFHAo28U-9BxJ1Zp7yYUvarAEGacqOV9zGuJQ3FP5jeKZZGt8_1bSiqQGhs7r4oCGwVxZv2VRSgHWxvROqEx4qz0TdzmHFzgXKAhHQfoHnyNRmYmmr2s6adTi8Hl36ZHQffPTHRBFZiwDTzscS8uqTtDmIKmoeRwYl66kpZ4kzLv9OEba5o642FBfcuZg_tq0_TEpA0ocOG02Q1vo38iC9oyfNd61Fx_AIG6_Fo?type=png)](https://mermaid.live/edit#pako:eNqFU8tugzAQ_BXL5_AD3NIURZGSIiVUUSsuBm-IK3uN_GhVkfx7HQhFiqnq02pmWHbG647WmgNNaZIkJTrhJKTkaZuv8-OWHLOnw6bISuxJMM-CNYapEkk4r4dsTy6XJNEdWe6LzWqbpeTMbMyu8t0ueyke2W6ob8c6I7Ah3oJBpiAiZkFQTMgIbY3-FBxMTDBrv7ThE1FpLYEhqTWehFHAo28U-9BxJ1Zp7yYUvarAEGacqOV9zGuJQ3FP5jeKZZGt8_1bSiqQGhs7r4oCGwVxZv2VRSgHWxvROqEx4qz0TdzmHFzgXKAhHQfoHnyNRmYmmr2s6adTi8Hl36ZHQffPTHRBFZiwDTzscS8uqTtDmIKmoeRwYl66kpZ4kzLv9OEba5o642FBfcuZg_tq0_TEpA0ocOG02Q1vo38iC9oyfNd61Fx_AIG6_Fo)
Cheers 🍺🍺
Happy coding!
