const assert = require('assert');

Feature('Unliking Resto');

Before(({ I }) => {
    I.amOnPage('/');
    I.seeElement('.resto-info__title');
    I.click(locate('.resto-info__title').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');;
  });

  Scenario('Unliking one resto', async ({ I }) => {
    I.seeElement('.resto-info__title');
    const likedResto = locate('.resto-info__title').first();
    const likedRestoTitle = await I.grabTextFrom(likedResto);
    I.click(likedResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    const restoCount = await I.grabNumberOfVisibleElements('.resto-info__title');
    assert.strictEqual(restoCount, 0, 'Restoran favorit masih ada padahal seharusnya sudah dihapus.');
  });
