import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
export declare namespace BattleSkyTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _season: any;
        readonly _weatherType: any;
        readonly timeOfDay: string;
        readonly _climate: string;
        readonly skyFile: string;
        readonly supportsAmbientFog: boolean;
        readonly supportsVolumetricFog: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get climate(): Climates.Entry | undefined;
    }
}
export default BattleSkyTypes;
