import { CollectionCache, CollectionKey } from "../../../common";
import { Slots } from "./Slots";
export declare namespace SlotsGdpValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _slot: string;
        readonly level: number;
        readonly gdpValue: number;
        readonly buildingGdpModifier: number;
        readonly onscreenName: string;
        constructor(collectionCache: CollectionCache, values: any);
        get slot(): Slots.Entry | undefined;
    }
}
export default SlotsGdpValues;
