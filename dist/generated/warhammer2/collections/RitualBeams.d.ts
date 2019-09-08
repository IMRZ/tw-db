import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { RitualBeamTypes } from "./RitualBeamTypes";
export declare namespace RitualBeams {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _culture: string;
        readonly _beamType: string;
        readonly bmd: string;
        readonly id: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly culture: Cultures.Entry | undefined;
        readonly beamType: RitualBeamTypes.Entry | undefined;
    }
}
export default RitualBeams;
