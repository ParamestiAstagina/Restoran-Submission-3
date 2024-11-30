const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
    I.amOnPage('/');
  });

  Scenario('liking one resto', async ({ I }) => {
    I.seeElement('.resto-info__title');
    const firstResto = locate('.resto-info__title').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.containerResto');
    const likedRestoTitle = await I.grabTextFrom('.resto-info__title');
 
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
  });



