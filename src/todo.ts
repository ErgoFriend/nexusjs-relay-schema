import { objectType } from "nexus";
import { Project } from "./project";

export const Todo = objectType({
  name: "Todo",
  definition(t) {
    t.implements("Node");
    t.nonNull.relayGlobalId("id", {});
    t.nonNull.string("title");
    t.nonNull.boolean("done");
    t.nonNull.field("project", {
      type: Project,
      resolve: async () => ({} as any),
    });
  },
});
