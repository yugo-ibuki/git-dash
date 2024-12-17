# git-dash

This is a git analysis tool.

# Project Status

Currently, the sample implementation as Proof of Concept has been completed.  
We are working on the practical implementation.

# Github Actions

We currently provide Github Actions with the following features:  
(Includes implementation in progress)

- Collect repository activity: WIP
- Report activity to backend server (for displaying UI in browser): WIP

# Development Workflow

1. Add Schema file (packages/schema)
2. Add Query file (apps/job)
3. Add API file (apps/api)
4. Add UI file (apps/web)

# Architecture

WIP

# Pricing

Currently, this project offers free services as a proof of concept.  
(All plans are free and may continue for the next 6 months/year)

In the future, we plan to offer paid managed services in the cloud.  
(We will also offer discounts for early access users.)

And Merged PR creators will be given a discount on the paid plan.
(Details will be announced later)

# TODO

- Add overview page
- Add four keys page
  - Add repository activity graph across all repositories
  - Add hazard register api (only ui)
  - Add hazard recovery register api (only ui)
- 全体的に不要なグラフがないか確認する
- 全体的にどのグラフが再利用可能か確認する
- Add site meta title
- Deploy to Cloudflare
