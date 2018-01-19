/* global Feature Scenario */

Feature('Parameter replication')

Scenario('Single parameter is passed along to the next page', async (I) => {
  I.amOnPage('/tests/html/index.html?utm_source=good-param')
  I.click('#should-work')
  I.waitForVisible('#here-you-go')
  I.seeInCurrentUrl('/other-page.html?utm_source=good-param')
})

Scenario('Multiple parameters are passed along to the next page', async (I) => {
  I.amOnPage('/tests/html/index.html?utm_source=good-param&utm_medium=good-param')
  I.click('#should-work')
  I.waitForVisible('#here-you-go')
  I.seeInCurrentUrl('utm_source=good-param')
  I.seeInCurrentUrl('utm_medium=good-param')
})

Scenario('Unneeded parameters are NOT passed along to the next page', async (I) => {
  I.amOnPage('/tests/html/index.html?utm_source=good-param&uselessparam=hey')
  I.click('#should-work')
  I.waitForVisible('#here-you-go')
  I.seeInCurrentUrl('utm_source=good-param')
  I.dontSeeInCurrentUrl('uselessparam')
})

Scenario('Parameters are passed along even with an intermediary page on the way', async (I) => {
  I.amOnPage('/tests/html/index.html?utm_source=good-param')
  I.click('#intermediary')
  I.waitForVisible('#should-work')
  I.dontSeeInCurrentUrl('utm_source')
  I.click('#should-work')
  I.seeInCurrentUrl('utm_source=good-param')
})
