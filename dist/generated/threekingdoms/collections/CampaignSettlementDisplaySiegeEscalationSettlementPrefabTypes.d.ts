import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSiegeEscalationLevels } from "./CampaignSiegeEscalationLevels";
import { PrefabTypes } from "./PrefabTypes";
export declare namespace CampaignSettlementDisplaySiegeEscalationSettlementPrefabTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _level: number;
        readonly _prefabTypeNormal: string;
        readonly _prefabTypeSiege: string;
        readonly _prefabTypeRazed: string;
        constructor(collectionCache: CollectionCache, values: any);
        get level(): CampaignSiegeEscalationLevels.Entry | undefined;
        get prefabTypeNormal(): PrefabTypes.Entry | undefined;
        get prefabTypeSiege(): PrefabTypes.Entry | undefined;
        get prefabTypeRazed(): PrefabTypes.Entry | undefined;
    }
}
export default CampaignSettlementDisplaySiegeEscalationSettlementPrefabTypes;
