import { CollectionCache, CollectionKey } from "../../../common";
import { CeoThresholds } from "./CeoThresholds";
import { CeoNodes } from "./CeoNodes";
export declare namespace CeoThresholdNodes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ceoThreshold: string;
        readonly _ceoNode: string;
        readonly pointsThresholdToActivateNode: number;
        readonly canDowngradeToPreviousNode: boolean;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get ceoThreshold(): CeoThresholds.Entry | undefined;
        get ceoNode(): CeoNodes.Entry | undefined;
    }
}
export default CeoThresholdNodes;
