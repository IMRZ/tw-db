import { CollectionCache, CollectionKey } from "../../../common";
import { Deployables } from "./Deployables";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";
export declare namespace DeployablesToDisallowedBattleTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deployables: string;
        readonly _campaignBattleType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deployables(): Deployables.Entry | undefined;
        get campaignBattleType(): CampaignBattleTypeEnums.Entry | undefined;
    }
}
export default DeployablesToDisallowedBattleTypes;
