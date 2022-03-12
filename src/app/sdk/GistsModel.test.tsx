import { Gists } from './GistsModel';

test('Searching empty username should return 0 gists', async () => {
  const sdkGist = new Gists();

  const gists = await sdkGist.get("");

  expect(gists.length).toBe(0);
});
