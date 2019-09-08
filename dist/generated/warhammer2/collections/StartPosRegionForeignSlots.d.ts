import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Factions } from "./Factions";
import { Regions } from "./Regions";
import { SlotSets } from "./SlotSets";
export declare namespace StartPosRegionForeignSlots {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaign: string;
        readonly _faction: string;
        readonly _region: string;
        readonly _slotSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaign: Campaigns.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
        readonly region: Regions.Entry | undefined;
        readonly slotSet: SlotSets.Entry | undefined;
    }
}
export default StartPosRegionForeignSlots;
