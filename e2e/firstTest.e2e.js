const { reloadApp } = require('detox-expo-helpers');

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

describe('Example', () => {
  beforeAll(async () => {
    await reloadApp();
    const welcomeMessage = element(by.id("abc"));
    await waitFor(welcomeMessage).toBeVisible().withTimeout(20000);

  });

  beforeEach(async () => {});

  it('should have welcome screen', async () => {
    await expect(element(by.id('abc'))).toBeVisible();
    await expect(element(by.id('now-visible'))).not.toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('abc')).tap();
    await waitFor(element(by.id('now-visible'))).toBeVisible();
  });
});
