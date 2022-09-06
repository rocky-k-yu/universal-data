/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-nocheck
import axiosStatic, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IRequestOptions extends AxiosRequestConfig {}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export const basePath = '/universal-data';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class ExperienceService {
  /**
   * Get dynamic form
   */
  static getDynamicForm(options: IRequestOptions = {}): Promise<GetDynamicFormResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/experience-service/dynamic-form.json';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class CmsService {
  /**
   * Get product benefits
   */
  static getProductBenefitsById(
    params: {
      /** Product ID */
      productId: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetProductBenefitsByIdResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/cms-service/product-benefits.json';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { productId: params['productId'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export interface GetDynamicFormResponse {
  /**  */
  status?: string;

  /**  */
  fields?: FormFields[];
}

export interface FormFields {
  /**  */
  type?: string;

  /**  */
  props?: object;
}

export interface GetProductBenefitsByIdResponse {
  /**  */
  status?: string;

  /**  */
  productBenefits?: ProductBenefits[];
}

export interface ProductBenefits {
  /**  */
  title?: string;

  /**  */
  secondaryText?: string;
}

export interface CreateOrUpdateUserInput {
  /** 用户ID(ID来自User表) */
  userId?: number;

  /** 用户权限 */
  userRights?: EnumCreateOrUpdateUserInputUserRights[];
}

export interface Abc {
  /**  */
  id?: string;

  /**  */
  isLow?: boolean;
}

export interface NumberArrayEnumModel {
  /**  */
  foo?: INumberArrayEnumModelFoo[];

  /**  */
  bar?: INumberArrayEnumModelBar[];
}

export interface Error {
  /**  */
  code?: number;

  /**  */
  message?: string;

  /**  */
  fields?: string;
}

export interface AuditLogListDto {
  /**  */
  userId?: number;

  /**  */
  id?: number;
}

export interface JsonResult_Guid {
  /** 结果 */
  result?: boolean;

  /** 代码 */
  code?: EnumJsonResult_GuidCode;

  /** 数据 */
  data?: string;

  /** 消息 */
  message?: string;
}

export enum RoleType {
  'Admin' = 'Admin',
  'User' = 'User',
  'SetSms' = 'SetSms'
}
export enum EnumCreateOrUpdateUserInputUserRights {
  'View' = 'View',
  'Operate' = 'Operate',
  'Auth' = 'Auth',
  'Search' = 'Search',
  'Delete' = 'Delete',
  'UserManage' = 'UserManage',
  'UserConfig' = 'UserConfig',
  'SetTime' = 'SetTime',
  'SetNetwork' = 'SetNetwork',
  'SetSms' = 'SetSms',
  'SystemManage' = 'SystemManage'
}
type INumberArrayEnumModelFoo = 0 | 1 | 2 | 4 | 8;
type INumberArrayEnumModelBar = 0 | 1 | 2 | 3;
export enum EnumJsonResult_GuidCode {
  'Success' = 'Success',
  'Timeout' = 'Timeout',
  'Fail' = 'Fail',
  'Expired' = 'Expired',
  'Error' = 'Error',
  'InternalServerError' = 'InternalServerError',
  'InvalidAnonymousAccess' = 'InvalidAnonymousAccess',
  'UserSessionExpired' = 'UserSessionExpired',
  'UserIsBinded' = 'UserIsBinded'
}
