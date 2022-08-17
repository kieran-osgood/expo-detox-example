describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('abc'))).toBeVisible();
    await expect(element(by.id('now-visible'))).not.toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('abc')).tap();
    await expect(element(by.text('Open up App.js to start working on your app!'))).toBeVisible();
  });
});
