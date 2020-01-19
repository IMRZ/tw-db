import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { FactorialEffects } from "./FactorialEffects";
import { CampaignFactorialScopes } from "./CampaignFactorialScopes";
export declare namespace CampaignBuildingLevelFactorialEffectJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _buildingLevel: string;
        readonly _factorialEffect: string;
        readonly value: number;
        readonly _scope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevel(): BuildingLevels.Entry | undefined;
        get factorialEffect(): FactorialEffects.Entry | undefined;
        get scope(): CampaignFactorialScopes.Entry | undefined;
    }
}
export default CampaignBuildingLevelFactorialEffectJunctions;
