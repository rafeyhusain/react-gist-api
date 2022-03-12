import { IGist } from './IGist';

export class Gists {
  async get(username: string): Promise<IGist[]> {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/gists`);
      const gists: IGist[] = await response.json();

      return gists;
    } catch (error) {
      console.log('error', error);
    }

    return [];
  }
}
