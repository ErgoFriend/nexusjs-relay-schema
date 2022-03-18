import { connectionFromArray } from "graphql-relay";
import { objectType, queryField } from "nexus";
import { Todo } from "./todo";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.implements("Node");
    t.nonNull.string("title");
    t.nonNull.relayGlobalId("id", {});
    t.nonNull.boolean("done");
    t.connectionField("todos", {
      type: Todo,
      async resolve(root, args, ctx, info) {
        return connectionFromArray([], args);
      },
    });
  },
});

export const allProjects = queryField((t) => {
  t.connectionField("allProjects", {
    type: Project,
    async resolve(root, args, ctx, info) {
      return connectionFromArray([], args);
    },
  });
});
