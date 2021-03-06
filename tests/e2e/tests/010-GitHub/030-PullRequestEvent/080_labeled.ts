import { requestLabeled, header } from '../../../webhooks/github/PullRequestEvent';
import { sendGitHubRequest } from '../../../utils/utils';

export default function() {
  return Promise.resolve()
    .then(() => sendGitHubRequest(requestLabeled, header))
    .then(resp => resp.msg === 'ok' ? Promise.resolve() : Promise.reject(resp))
    .catch(err => Promise.reject(err));
}
