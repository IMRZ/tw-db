import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace CaiDiplomacyEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly transitive: boolean;
        readonly _diplomaticFactorGroupActive: string;
        readonly _diplomaticFactorGroupInactive: string;
        readonly strategicThreatMultiplierMod: number;
        readonly _diplomaticFactorGroupActiveOurFriends: string;
        readonly _diplomaticFactorGroupActiveOurEnemies: string;
        readonly _diplomaticFactorGroupInactiveOurFriends: string;
        readonly _diplomaticFactorGroupInactiveOurEnemies: string;
        readonly stanceUpdateRequired: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get diplomaticFactorGroupActive(): DiplomacyStrings.Entry | undefined;
        get diplomaticFactorGroupInactive(): DiplomacyStrings.Entry | undefined;
        get diplomaticFactorGroupActiveOurFriends(): DiplomacyStrings.Entry | undefined;
        get diplomaticFactorGroupActiveOurEnemies(): DiplomacyStrings.Entry | undefined;
        get diplomaticFactorGroupInactiveOurFriends(): DiplomacyStrings.Entry | undefined;
        get diplomaticFactorGroupInactiveOurEnemies(): DiplomacyStrings.Entry | undefined;
    }
}
export default CaiDiplomacyEvents;
