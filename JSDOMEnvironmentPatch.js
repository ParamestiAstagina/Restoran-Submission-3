import JSDOMEnvironment from 'jest-environment-jsdom';

export default class JSDOMEnvironmentPatch extends JSDOMEnvironment {
  constructor(...args) {
    super(...args);

    this.global.structuredClone = structuredClone;
  }
}