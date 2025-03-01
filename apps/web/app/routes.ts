import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  // login state layout (root)
  layout("routes/(login)/layout.tsx", [
    index("routes/(login)/index.tsx"),
    route("settings", "routes/(login)/settings.tsx"),
    route("workspaces", "routes/(login)/workspaces.tsx"),
  ]),

  // login state layout (group)
  route(":workspaceId", "routes/(login)/$workspaceId/layout.tsx", [
    // コミットグラフ: 組織横断のコミットグラフ
    index("routes/(login)/$workspaceId/index.tsx"),
    route("overview", "routes/(login)/$workspaceId/overview/page.tsx"),
    // リポジトリ横断の4key table
    route("fourkeys", "routes/(login)/$workspaceId/fourkey/page.tsx"),
    // グラフ: TOP10 リポジトリごとのGithub Actions費用の前月比グラフ (Overviewページには全リポジトリ横断のコストを表示)
    route("cost", "routes/(login)/$workspaceId/cost/page.tsx"),
    // グラフ: 全ユーザのコミットグラフ (今月分 + 前月分)
    route("users", "routes/(login)/$workspaceId/user/page.tsx"),
    // グラフ: 任意のユーザのPRグラフ (前月比グラフ)
    // グラフ: 任意のユーザのReviewグラフ (前月比グラフ)
    route(
      "users/:userId",
      "routes/(login)/$workspaceId.users.$userId/page.tsx",
    ),
    route("repositories", "routes/(login)/$workspaceId/repository/page.tsx"),
    route(
      "repositories/:repositoryId",
      "routes/(login)/$workspaceId.repositories.$repositoryId/page.tsx",
    ),

    // NOTE: 以下のNestedRouteの記法では上手く動かなかったので後で調査する
    // route("settings", "routes/(login)/$workspaceId/layout.tsx", [
    //   index("routes/(login)/$workspaceId/settings/page.tsx"),
    //   route("api-key", "routes/(login)/$workspaceId/settings/api-key/page.tsx"),
    // ]),
    route("settings", "routes/(login)/$workspaceId/settings/page.tsx", [
      route("members", "routes/(login)/$workspaceId/settings/members/page.tsx"),
      route(
        "members/new",
        "routes/(login)/$workspaceId/settings/members/new/page.tsx",
      ),
      route(
        "members/:userId",
        "routes/(login)/$workspaceId/settings/members/$userId/page.tsx",
      ),
      route("api-key", "routes/(login)/$workspaceId/settings/api-key/page.tsx"),
      route("general", "routes/(login)/$workspaceId/settings/general/page.tsx"),
    ]),
  ]),

  // logout state layout
  layout("routes/(logout)/layout.tsx", [
    route("sign-in", "routes/(logout)/sign-in.tsx"),
    route("sign-up", "routes/(logout)/sign-up.tsx"),
  ]),
] satisfies RouteConfig;
