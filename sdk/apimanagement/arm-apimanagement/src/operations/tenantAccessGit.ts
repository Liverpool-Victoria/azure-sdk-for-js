/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/tenantAccessGitMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a TenantAccessGit. */
export class TenantAccessGit {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a TenantAccessGit.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Regenerate primary access key for GIT.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  regeneratePrimaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param callback The callback
   */
  regeneratePrimaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param options The optional parameters
   * @param callback The callback
   */
  regeneratePrimaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  regeneratePrimaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        accessName,
        options
      },
      regeneratePrimaryKeyOperationSpec,
      callback);
  }

  /**
   * Regenerate secondary access key for GIT.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  regenerateSecondaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param callback The callback
   */
  regenerateSecondaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration. Possible values include: 'access',
   * 'gitAccess'
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateSecondaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  regenerateSecondaryKey(resourceGroupName: string, serviceName: string, accessName: Models.AccessIdName, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        accessName,
        options
      },
      regenerateSecondaryKeyOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const regeneratePrimaryKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}/git/regeneratePrimaryKey",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.accessName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const regenerateSecondaryKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}/git/regenerateSecondaryKey",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.accessName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};