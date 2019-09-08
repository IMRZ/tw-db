import { CollectionCache, CollectionKey } from "../../../common";
import { GraphicsSettings } from "./GraphicsSettings";
import { GraphicsSettingsOptions } from "./GraphicsSettingsOptions";
export declare namespace GraphicsSettingsToGraphicsOptionsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _setting: string;
        readonly _option: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly setting: GraphicsSettings.Entry | undefined;
        readonly option: GraphicsSettingsOptions.Entry | undefined;
    }
}
export default GraphicsSettingsToGraphicsOptionsJunctions;
