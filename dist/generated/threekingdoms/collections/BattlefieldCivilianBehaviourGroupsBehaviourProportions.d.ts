import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldCivilianBehaviourGroups } from "./BattlefieldCivilianBehaviourGroups";
import { BattlefieldCivilianBehaviours } from "./BattlefieldCivilianBehaviours";
export declare namespace BattlefieldCivilianBehaviourGroupsBehaviourProportions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _behaviourGroup: string;
        readonly _behaviour: string;
        readonly proportion: number;
        constructor(collectionCache: CollectionCache, values: any);
        get behaviourGroup(): BattlefieldCivilianBehaviourGroups.Entry | undefined;
        get behaviour(): BattlefieldCivilianBehaviours.Entry | undefined;
    }
}
export default BattlefieldCivilianBehaviourGroupsBehaviourProportions;
