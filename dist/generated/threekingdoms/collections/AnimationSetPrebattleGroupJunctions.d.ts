import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAnimSetEnums } from "./CampaignAnimSetEnums";
import { AnimationSetPrebattleGroups } from "./AnimationSetPrebattleGroups";
export declare namespace AnimationSetPrebattleGroupJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _animSet: string;
        readonly _group: string;
        constructor(collectionCache: CollectionCache, values: any);
        get animSet(): CampaignAnimSetEnums.Entry | undefined;
        get group(): AnimationSetPrebattleGroups.Entry | undefined;
    }
}
export default AnimationSetPrebattleGroupJunctions;
