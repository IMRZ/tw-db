import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
import { WarscapeRigid } from "./WarscapeRigid";
export declare namespace SmallVegetationClimatesJct {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _climate: string;
        readonly _rigidName: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly climate: Climates.Entry | undefined;
        readonly rigidName: WarscapeRigid.Entry | undefined;
    }
}
export default SmallVegetationClimatesJct;
