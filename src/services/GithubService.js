export default class GithubServise {
  static BASE_API_URL = 'https://api.github.com/';

  static async getResource(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}. Status: ${response.status}`);
    }

    return await response.json();
  }

  static transformUser(user) {
    return {
      name: user.name,
      bio: user.bio,
      login: user.login,
      repositories: user.public_repos,
      followers: user.followers,
      following: user.following,
      created: user.created_at,
      companies: user.company,
      thumbnail: user.avatar_url,
      location: user.location,
      url: user.html_url,
      twitterUsername: user.twitter_username,
      id: user.id,
    };
  }

  async getUserByName(name) {
    const user = await GithubServise.getResource(
      `${GithubServise.BASE_API_URL}users/${name}`
    );

    return GithubServise.transformUser(user);
  }
}
