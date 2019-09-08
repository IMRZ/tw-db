import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyUiGroups } from "./TechnologyUiGroups";
import { TechnologyNodes } from "./TechnologyNodes";
export declare namespace TechnologyUiGroupsToTechnologyNodesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _techUiGroup: string;
        readonly _topLeftNode: string;
        readonly _bottomRightNode: string;
        readonly _optionalTopRightNode: string;
        readonly _optionalBottomLeftNode: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly techUiGroup: TechnologyUiGroups.Entry | undefined;
        readonly topLeftNode: TechnologyNodes.Entry | undefined;
        readonly bottomRightNode: TechnologyNodes.Entry | undefined;
        readonly optionalTopRightNode: TechnologyNodes.Entry | undefined;
        readonly optionalBottomLeftNode: TechnologyNodes.Entry | undefined;
    }
}
export default TechnologyUiGroupsToTechnologyNodesJunctions;
