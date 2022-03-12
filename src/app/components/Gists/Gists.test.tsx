import React from 'react';
import ReactDOM from 'react-dom';
import { IGist } from '../../sdk/IGist';
import Gists from './Gists';

test("renders without crash", async () => {
  const div = document.createElement("div");
  let gists: IGist[] = await JSON.parse(`[ {
    "url": "https://api.github.com/gists/9e2aabdc0a652e2042cf94ddb1bf9607",
    "forks_url": "https://api.github.com/gists/9e2aabdc0a652e2042cf94ddb1bf9607/forks",
    "commits_url": "https://api.github.com/gists/9e2aabdc0a652e2042cf94ddb1bf9607/commits",
    "id": "9e2aabdc0a652e2042cf94ddb1bf9607",
    "node_id": "G_kwDOAcar6NoAIDllMmFhYmRjMGE2NTJlMjA0MmNmOTRkZGIxYmY5NjA3",
    "git_pull_url": "https://gist.github.com/9e2aabdc0a652e2042cf94ddb1bf9607.git",
    "git_push_url": "https://gist.github.com/9e2aabdc0a652e2042cf94ddb1bf9607.git",
    "html_url": "https://gist.github.com/9e2aabdc0a652e2042cf94ddb1bf9607",
    "files": {
        "sample.py": {
            "filename": "sample.py",
            "type": "application/x-python",
            "language": "Python",
            "raw_url": "https://gist.githubusercontent.com/rafeyhusain/9e2aabdc0a652e2042cf94ddb1bf9607/raw/6f87989dbdb615d4a123c7c4a7c81f70ea83db0e/sample.py",
            "size": 21
        }
    },
    "public": true,
    "created_at": "2022-03-12T07:06:32Z",
    "updated_at": "2022-03-12T07:06:32Z",
    "description": "",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/9e2aabdc0a652e2042cf94ddb1bf9607/comments",
    "owner": {
        "login": "rafeyhusain",
        "id": 29797352,
        "node_id": "MDQ6VXNlcjI5Nzk3MzUy",
        "avatar_url": "https://avatars.githubusercontent.com/u/29797352?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/rafeyhusain",
        "html_url": "https://github.com/rafeyhusain",
        "followers_url": "https://api.github.com/users/rafeyhusain/followers",
        "following_url": "https://api.github.com/users/rafeyhusain/following{/other_user}",
        "gists_url": "https://api.github.com/users/rafeyhusain/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/rafeyhusain/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/rafeyhusain/subscriptions",
        "organizations_url": "https://api.github.com/users/rafeyhusain/orgs",
        "repos_url": "https://api.github.com/users/rafeyhusain/repos",
        "events_url": "https://api.github.com/users/rafeyhusain/events{/privacy}",
        "received_events_url": "https://api.github.com/users/rafeyhusain/received_events",
        "type": "User",
        "site_admin": false
    },
    "truncated": false
    }]`);

  ReactDOM.render(<Gists gists={gists} />, div);
  ReactDOM.unmountComponentAtNode(div)
})