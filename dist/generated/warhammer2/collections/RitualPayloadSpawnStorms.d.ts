import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { Regions } from "./Regions";
import { CampaignStormTypes } from "./CampaignStormTypes";
export declare namespace RitualPayloadSpawnStorms {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payload: string;
        readonly _region: string;
        readonly strength: number;
        readonly maxTurnsDuration: number;
        readonly _type: string;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): RitualPayloads.Entry | undefined;
        get region(): Regions.Entry | undefined;
        get type(): CampaignStormTypes.Entry | undefined;
    }
}
export default RitualPayloadSpawnStorms;
