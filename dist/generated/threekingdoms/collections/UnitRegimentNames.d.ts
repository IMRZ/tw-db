import { CollectionCache, CollectionKey } from "../../../common";
import { NamesGroups } from "./NamesGroups";
import { UnitCastes } from "./UnitCastes";
export declare namespace UnitRegimentNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _nameGroup: number;
        readonly _unitCaste: string;
        readonly _unitName: any;
        readonly nameOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
        get nameGroup(): NamesGroups.Entry | undefined;
        get unitCaste(): UnitCastes.Entry | undefined;
    }
}
export default UnitRegimentNames;
