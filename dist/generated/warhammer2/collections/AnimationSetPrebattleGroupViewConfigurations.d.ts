import { CollectionCache, CollectionKey } from "../../../common";
import { AnimationSetPrebattleGroups } from "./AnimationSetPrebattleGroups";
export declare namespace AnimationSetPrebattleGroupViewConfigurations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _attacker: string;
        readonly _defender: string;
        readonly separation: number;
        readonly cameraDistance: number;
        readonly cameraHeight: number;
        readonly scale: number;
        constructor(collectionCache: CollectionCache, values: any);
        get attacker(): AnimationSetPrebattleGroups.Entry | undefined;
        get defender(): AnimationSetPrebattleGroups.Entry | undefined;
    }
}
export default AnimationSetPrebattleGroupViewConfigurations;
