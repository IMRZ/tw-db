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
        get groupId(): BattleVortexCompositeSceneGroups.Entry | undefined;
        get compositeScene(): CompositeSceneFiles.Entry | undefined;
    }
}
export default BattleVortexCompositeSceneGroupToScenes;
