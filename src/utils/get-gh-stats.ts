import { Repository } from '@/types/repository';

// Set your personal access token
const personalAccessToken = '';

// GraphQL query to retrieve the number of commits, PRs, and issues opened by you
const query = `
query ContributionsView($username: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $username) {
    contributionsCollection(from: $from, to: $to) {
      commitContributionsByRepository(maxRepositories: 3) {
        repository {
          nameWithOwner
        }
        contributions(orderBy: {field: COMMIT_COUNT, direction: DESC}) {
          totalCount
        }
      }
      pullRequestContributionsByRepository(maxRepositories: 3) {
        repository {
          nameWithOwner
        }
        contributions(orderBy: {direction: DESC}) {
          totalCount
        }
      }
      issueContributionsByRepository(maxRepositories: 3) {
        repository {
          nameWithOwner
        }
        contributions(orderBy: {direction: DESC}) {
          totalCount
        }
      }
    }
  }
}
`;


export const getGithubStats = async () => {
  const variables = {
    "username": "progmatic-99",
    "from": "2021-05-17T11:55:55.285Z",
    "to": "2022-05-17T11:55:55.285Z"
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${personalAccessToken}`,
        'Accept': 'application/vnd.github.v4+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables: variables }),
    })
    const data = await response.json()
    let repositories: Repository[] = []

    let commitContributions = data.data.user.contributionsCollection.commitContributionsByRepository;
    let CommitContribution = commitContributions[0].repository;
    let repositoryNameWithOwner = CommitContribution.nameWithOwner;
    let commits = commitContributions[0].contributions.totalCount;

    let prContributions = data.data.user.contributionsCollection.pullRequestContributionsByRepository
    let PrContribution = prContributions[0]
    let prs = PrContribution.contributions.totalCount

    let issuesContributions = data.data.user.contributionsCollection.issueContributionsByRepository
    let IssuesContribution = issuesContributions[1].contributions
    let issues = IssuesContribution.totalCount

    let repo: Repository = {
      repoName: repositoryNameWithOwner,
      commits: commits,
      pullRequests: prs,
      issues: issues,
      description: "The frontend for the Open Event API Server https://test.eventyay.com",
      language: "Ember.js, Javascript"
    }

    repositories.push(repo)

    commitContributions = data.data.user.contributionsCollection.commitContributionsByRepository;
    CommitContribution = commitContributions[1].repository;
    repositoryNameWithOwner = CommitContribution.nameWithOwner;
    commits = commitContributions[1].contributions.totalCount;

    prContributions = data.data.user.contributionsCollection.pullRequestContributionsByRepository
    PrContribution = prContributions[1]
    prs = PrContribution.contributions.totalCount

    issuesContributions = data.data.user.contributionsCollection.issueContributionsByRepository
    IssuesContribution = issuesContributions[2].contributions
    issues = IssuesContribution.totalCount

    repo = {
      repoName: repositoryNameWithOwner,
      commits: commits,
      pullRequests: prs,
      issues: issues,
      description: "The Open Event Organizer Server to Manage Events https://test-api.eventyay.com",
      language: "Flask, Python"
    }
    repositories.push(repo)

    return { repositories }
  } catch (error) {
    console.error('Error:', error);
    return null;
  };
}