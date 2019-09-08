import { CollectionCache, CollectionKey } from "../../../common";
import { BattleVortexCompositeSceneGroups } from "./BattleVortexCompositeSceneGroups";
import { CompositeSceneFiles } from "./CompositeSceneFiles";
export declare namespace BattleVortexCompositeSceneGroupToScenes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _groupId: string;
        readonly _compositeScene: string;
        readonly triggerDelay: number;
        readonly freezePosition: boolean;
        readonly freezeRotation: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly groupId: BattleVortexCompositeSceneGroups.Entry | undefined;
        readonly compositeScene: CompositeSceneFiles.Entry | undefined;
    }
}
export default BattleVortexCompositeSceneGroupToScenes;
