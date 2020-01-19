import { CollectionCache, CollectionKey } from "../../../common";
import { Pdlc } from "./Pdlc";
export declare namespace NewContentAlerts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly releaseOrder: number;
        readonly showOrder: number;
        readonly header: string;
        readonly description: string;
        readonly imagePath: string;
        readonly buttonUrl: string;
        readonly optionalUnpurchasedDescription: string;
        readonly _optionalDlcLink: string;
        constructor(collectionCache: CollectionCache, values: any);
        get optionalDlcLink(): Pdlc.Entry | undefined;
    }
}
export default NewContentAlerts;
