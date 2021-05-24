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
import * as Mappers from "../models/policyTrackedResourcesMappers";
import * as Parameters from "../models/parameters";
import { PolicyInsightsClientContext } from "../policyInsightsClientContext";

/** Class representing a PolicyTrackedResources. */
export class PolicyTrackedResources {
  private readonly client: PolicyInsightsClientContext;

  /**
   * Create a PolicyTrackedResources.
   * @param {PolicyInsightsClientContext} client Reference to the service client.
   */
  constructor(client: PolicyInsightsClientContext) {
    this.client = client;
  }

  /**
   * Queries policy tracked resources under the management group.
   * @param managementGroupName Management group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyTrackedResourcesListQueryResultsForManagementGroupResponse>
   */
  listQueryResultsForManagementGroup(managementGroupName: string, options?: Models.PolicyTrackedResourcesListQueryResultsForManagementGroupOptionalParams): Promise<Models.PolicyTrackedResourcesListQueryResultsForManagementGroupResponse>;
  /**
   * @param managementGroupName Management group name.
   * @param callback The callback
   */
  listQueryResultsForManagementGroup(managementGroupName: string, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  /**
   * @param managementGroupName Management group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listQueryResultsForManagementGroup(managementGroupName: string, options: Models.PolicyTrackedResourcesListQueryResultsForManagementGroupOptionalParams, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  listQueryResultsForManagementGroup(managementGroupName: string, options?: Models.PolicyTrackedResourcesListQueryResultsForManagementGroupOptionalParams | msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>, callback?: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): Promise<Models.PolicyTrackedResourcesListQueryResultsForManagementGroupResponse> {
    return this.client.sendOperationRequest(
      {
        managementGroupName,
        options
      },
      listQueryResultsForManagementGroupOperationSpec,
      callback) as Promise<Models.PolicyTrackedResourcesListQueryResultsForManagementGroupResponse>;
  }

  /**
   * Queries policy tracked resources under the subscription.
   * @param subscriptionId Microsoft Azure subscription ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyTrackedResourcesListQueryResultsForSubscriptionResponse>
   */
  listQueryResultsForSubscription(subscriptionId: string, options?: Models.PolicyTrackedResourcesListQueryResultsForSubscriptionOptionalParams): Promise<Models.PolicyTrackedResourcesListQueryResultsForSubscriptionResponse>;
  /**
   * @param subscriptionId Microsoft Azure subscription ID.
   * @param callback The callback
   */
  listQueryResultsForSubscription(subscriptionId: string, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  /**
   * @param subscriptionId Microsoft Azure subscription ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  listQueryResultsForSubscription(subscriptionId: string, options: Models.PolicyTrackedResourcesListQueryResultsForSubscriptionOptionalParams, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  listQueryResultsForSubscription(subscriptionId: string, options?: Models.PolicyTrackedResourcesListQueryResultsForSubscriptionOptionalParams | msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>, callback?: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): Promise<Models.PolicyTrackedResourcesListQueryResultsForSubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        subscriptionId,
        options
      },
      listQueryResultsForSubscriptionOperationSpec,
      callback) as Promise<Models.PolicyTrackedResourcesListQueryResultsForSubscriptionResponse>;
  }

  /**
   * Queries policy tracked resources under the resource group.
   * @param resourceGroupName Resource group name.
   * @param subscriptionId Microsoft Azure subscription ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceGroupResponse>
   */
  listQueryResultsForResourceGroup(resourceGroupName: string, subscriptionId: string, options?: Models.PolicyTrackedResourcesListQueryResultsForResourceGroupOptionalParams): Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceGroupResponse>;
  /**
   * @param resourceGroupName Resource group name.
   * @param subscriptionId Microsoft Azure subscription ID.
   * @param callback The callback
   */
  listQueryResultsForResourceGroup(resourceGroupName: string, subscriptionId: string, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  /**
   * @param resourceGroupName Resource group name.
   * @param subscriptionId Microsoft Azure subscription ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  listQueryResultsForResourceGroup(resourceGroupName: string, subscriptionId: string, options: Models.PolicyTrackedResourcesListQueryResultsForResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  listQueryResultsForResourceGroup(resourceGroupName: string, subscriptionId: string, options?: Models.PolicyTrackedResourcesListQueryResultsForResourceGroupOptionalParams | msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>, callback?: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        subscriptionId,
        options
      },
      listQueryResultsForResourceGroupOperationSpec,
      callback) as Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceGroupResponse>;
  }

  /**
   * Queries policy tracked resources under the resource.
   * @param resourceId Resource ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceResponse>
   */
  listQueryResultsForResource(resourceId: string, options?: Models.PolicyTrackedResourcesListQueryResultsForResourceOptionalParams): Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceResponse>;
  /**
   * @param resourceId Resource ID.
   * @param callback The callback
   */
  listQueryResultsForResource(resourceId: string, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  /**
   * @param resourceId Resource ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  listQueryResultsForResource(resourceId: string, options: Models.PolicyTrackedResourcesListQueryResultsForResourceOptionalParams, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  listQueryResultsForResource(resourceId: string, options?: Models.PolicyTrackedResourcesListQueryResultsForResourceOptionalParams | msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>, callback?: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceId,
        options
      },
      listQueryResultsForResourceOperationSpec,
      callback) as Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceResponse>;
  }

  /**
   * Queries policy tracked resources under the management group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyTrackedResourcesListQueryResultsForManagementGroupNextResponse>
   */
  listQueryResultsForManagementGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicyTrackedResourcesListQueryResultsForManagementGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listQueryResultsForManagementGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listQueryResultsForManagementGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  listQueryResultsForManagementGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>, callback?: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): Promise<Models.PolicyTrackedResourcesListQueryResultsForManagementGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listQueryResultsForManagementGroupNextOperationSpec,
      callback) as Promise<Models.PolicyTrackedResourcesListQueryResultsForManagementGroupNextResponse>;
  }

  /**
   * Queries policy tracked resources under the subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyTrackedResourcesListQueryResultsForSubscriptionNextResponse>
   */
  listQueryResultsForSubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicyTrackedResourcesListQueryResultsForSubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listQueryResultsForSubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listQueryResultsForSubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  listQueryResultsForSubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>, callback?: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): Promise<Models.PolicyTrackedResourcesListQueryResultsForSubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listQueryResultsForSubscriptionNextOperationSpec,
      callback) as Promise<Models.PolicyTrackedResourcesListQueryResultsForSubscriptionNextResponse>;
  }

  /**
   * Queries policy tracked resources under the resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceGroupNextResponse>
   */
  listQueryResultsForResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listQueryResultsForResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listQueryResultsForResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  listQueryResultsForResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>, callback?: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listQueryResultsForResourceGroupNextOperationSpec,
      callback) as Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceGroupNextResponse>;
  }

  /**
   * Queries policy tracked resources under the resource.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceNextResponse>
   */
  listQueryResultsForResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listQueryResultsForResourceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listQueryResultsForResourceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): void;
  listQueryResultsForResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>, callback?: msRest.ServiceCallback<Models.PolicyTrackedResourcesQueryResults>): Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listQueryResultsForResourceNextOperationSpec,
      callback) as Promise<Models.PolicyTrackedResourcesListQueryResultsForResourceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listQueryResultsForManagementGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/{managementGroupsNamespace}/managementGroups/{managementGroupName}/providers/Microsoft.PolicyInsights/policyTrackedResources/{policyTrackedResourcesResource}/queryResults",
  urlParameters: [
    Parameters.managementGroupsNamespace,
    Parameters.managementGroupName,
    Parameters.policyTrackedResourcesResource
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.top,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  serializer
};

const listQueryResultsForSubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/policyTrackedResources/{policyTrackedResourcesResource}/queryResults",
  urlParameters: [
    Parameters.policyTrackedResourcesResource,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.top,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  serializer
};

const listQueryResultsForResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/policyTrackedResources/{policyTrackedResourcesResource}/queryResults",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.policyTrackedResourcesResource,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.top,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  serializer
};

const listQueryResultsForResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "{resourceId}/providers/Microsoft.PolicyInsights/policyTrackedResources/{policyTrackedResourcesResource}/queryResults",
  urlParameters: [
    Parameters.resourceId,
    Parameters.policyTrackedResourcesResource
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.top,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  serializer
};

const listQueryResultsForManagementGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  serializer
};

const listQueryResultsForSubscriptionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  serializer
};

const listQueryResultsForResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  serializer
};

const listQueryResultsForResourceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  serializer
};