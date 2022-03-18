import { connectionPlugin } from "nexus";
import { relayNodeInterfacePlugin } from "@jcm/nexus-plugin-relay-node-interface";
import { relayGlobalIdPlugin } from "@jcm/nexus-plugin-relay-global-id";

const node = relayNodeInterfacePlugin({
  idFetcher: async ({ id, type }, _context, _info) => {
    if (!id || !type) return null;

    const node = null;
    if (!node) return null;

    return {
      __typename: type,
      ...node,
    };
  },
  resolveType: ({ __typename }) => __typename,
});

const nodeId = relayGlobalIdPlugin({ shouldAddRawId: false });

export const plugins = [node, nodeId, connectionPlugin()];
