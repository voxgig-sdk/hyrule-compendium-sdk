import { CategoryEntity } from './entity/CategoryEntity';
import { CompendiumEntryEntity } from './entity/CompendiumEntryEntity';
import { MasterModeEntity } from './entity/MasterModeEntity';
import { RegionEntity } from './entity/RegionEntity';
export type * from './HyruleCompendiumTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { HyruleCompendiumEntityBase } from './HyruleCompendiumEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class HyruleCompendiumSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Category(entopts?: Record<string, any>): CategoryEntity;
    CompendiumEntry(entopts?: Record<string, any>): CompendiumEntryEntity;
    MasterMode(entopts?: Record<string, any>): MasterModeEntity;
    Region(entopts?: Record<string, any>): RegionEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): HyruleCompendiumSDK;
    tester(testopts?: any, sdkopts?: any): HyruleCompendiumSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof HyruleCompendiumSDK;
export { stdutil, config, BaseFeature, HyruleCompendiumEntityBase, HyruleCompendiumSDK, SDK, };
