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
        get techUiGroup(): TechnologyUiGroups.Entry | undefined;
        get topLeftNode(): TechnologyNodes.Entry | undefined;
        get bottomRightNode(): TechnologyNodes.Entry | undefined;
        get optionalTopRightNode(): TechnologyNodes.Entry | undefined;
        get optionalBottomLeftNode(): TechnologyNodes.Entry | undefined;
    }
}
export default TechnologyUiGroupsToTechnologyNodesJunctions;
