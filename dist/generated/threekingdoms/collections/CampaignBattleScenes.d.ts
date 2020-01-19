import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
export declare namespace CampaignBattleScenes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly colour: number;
        readonly _culture: string;
        readonly bmd: string;
        readonly environment: string;
        constructor(collectionCache: CollectionCache, values: any);
        get culture(): Cultures.Entry | undefined;
    }
}
export default CampaignBattleScenes;
