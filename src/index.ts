import { makeSchema } from "nexus";
import path from "path";
import { plugins } from "./plugins";
import { Project } from "./project";
import { Todo } from "./todo";

makeSchema({
  types: [Todo, Project],
  plugins,
  features: {
    abstractTypeStrategies: {
      resolveType: false,
      __typename: true,
    },
  },
  outputs: {
    schema: path.join(__dirname, "../schema.graphql"),
    typegen: path.join(__dirname, "../generated.d.ts"),
  },
});
