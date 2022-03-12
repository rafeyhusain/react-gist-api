import { Gists, IGist } from './GistsModel';

test('Search USD should return 1 currency', () => {
  const ratesData: IGist[] = JSON.parse(`[{
      "currency":"USD",
      "precision":2,
      "nameI18N":"US Dollar",
      "exchangeGist":{
        "buy":2.0000000,
        "middle":2.2500000,
        "sell":2.5000000,
        "indicator":0,
        "lastModified":"2012-02-14T23:00:00Z"
      },
      "banknoteGist":{
        "buy":2.2000000,
        "middle":2.4000000,
        "sell":2.6000000,
        "indicator":0,
        "lastModified":"2018-11-06T23:00:00Z"
      },
      "flags":[
        "provided"
      ]
    }]`);

  const sdkGist = new Gists();

  const gists = sdkGist.filter(ratesData, 'USD');

  expect(gists.length).toBe(1);
});
