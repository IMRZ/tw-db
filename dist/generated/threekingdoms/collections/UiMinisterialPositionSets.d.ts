import { CollectionCache, CollectionKey } from "../../../common";
import { UiMinisterialPositionSetSpacings } from "./UiMinisterialPositionSetSpacings";
export declare namespace UiMinisterialPositionSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _spacing: string;
        readonly courtRow: number;
        readonly optionalSetHeader: string;
        constructor(collectionCache: CollectionCache, values: any);
        get spacing(): UiMinisterialPositionSetSpacings.Entry | undefined;
    }
}
export default UiMinisterialPositionSets;
