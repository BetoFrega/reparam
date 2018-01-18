Feature('Parameter replication')

Scenario('Parameters are passed along to the next page', (I) => {
  I.amOnPage('/?utm_source=good-param')
  I.click('#should-work')
  I.seeInCurrentUrl('/other-page/?utm_source=good-param')
})
