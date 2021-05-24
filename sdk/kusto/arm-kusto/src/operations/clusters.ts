/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/clustersMappers";
import * as Parameters from "../models/parameters";
import { KustoManagementClientContext } from "../kustoManagementClientContext";

/** Class representing a Clusters. */
export class Clusters {
  private readonly client: KustoManagementClientContext;

  /**
   * Create a Clusters.
   * @param {KustoManagementClientContext} client Reference to the service client.
   */
  constructor(client: KustoManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a Kusto cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersGetResponse>
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.ClustersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param callback The callback
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    callback: msRest.ServiceCallback<Models.Cluster>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.Cluster>
  ): void;
  get(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Cluster>,
    callback?: msRest.ServiceCallback<Models.Cluster>
  ): Promise<Models.ClustersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      getOperationSpec,
      callback
    ) as Promise<Models.ClustersGetResponse>;
  }

  /**
   * Create or update a Kusto cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param parameters The Kusto cluster parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersCreateOrUpdateResponse>
   */
  createOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    parameters: Models.Cluster,
    options?: Models.ClustersCreateOrUpdateOptionalParams
  ): Promise<Models.ClustersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(
      resourceGroupName,
      clusterName,
      parameters,
      options
    ).then((lroPoller) => lroPoller.pollUntilFinished()) as Promise<
      Models.ClustersCreateOrUpdateResponse
    >;
  }

  /**
   * Update a Kusto cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param parameters The Kusto cluster parameters supplied to the Update operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersUpdateResponse>
   */
  update(
    resourceGroupName: string,
    clusterName: string,
    parameters: Models.ClusterUpdate,
    options?: Models.ClustersUpdateOptionalParams
  ): Promise<Models.ClustersUpdateResponse> {
    return this.beginUpdate(resourceGroupName, clusterName, parameters, options).then((lroPoller) =>
      lroPoller.pollUntilFinished()
    ) as Promise<Models.ClustersUpdateResponse>;
  }

  /**
   * Deletes a Kusto cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, clusterName, options).then((lroPoller) =>
      lroPoller.pollUntilFinished()
    );
  }

  /**
   * Stops a Kusto cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRest.RestResponse> {
    return this.beginStop(resourceGroupName, clusterName, options).then((lroPoller) =>
      lroPoller.pollUntilFinished()
    );
  }

  /**
   * Starts a Kusto cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  start(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRest.RestResponse> {
    return this.beginStart(resourceGroupName, clusterName, options).then((lroPoller) =>
      lroPoller.pollUntilFinished()
    );
  }

  /**
   * Returns a list of databases that are owned by this cluster and were followed by another cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListFollowerDatabasesResponse>
   */
  listFollowerDatabases(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.ClustersListFollowerDatabasesResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param callback The callback
   */
  listFollowerDatabases(
    resourceGroupName: string,
    clusterName: string,
    callback: msRest.ServiceCallback<Models.FollowerDatabaseListResult>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  listFollowerDatabases(
    resourceGroupName: string,
    clusterName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.FollowerDatabaseListResult>
  ): void;
  listFollowerDatabases(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FollowerDatabaseListResult>,
    callback?: msRest.ServiceCallback<Models.FollowerDatabaseListResult>
  ): Promise<Models.ClustersListFollowerDatabasesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      listFollowerDatabasesOperationSpec,
      callback
    ) as Promise<Models.ClustersListFollowerDatabasesResponse>;
  }

  /**
   * Detaches all followers of a database owned by this cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param followerDatabaseToRemove The follower databases properties to remove.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  detachFollowerDatabases(
    resourceGroupName: string,
    clusterName: string,
    followerDatabaseToRemove: Models.FollowerDatabaseDefinition,
    options?: msRest.RequestOptionsBase
  ): Promise<msRest.RestResponse> {
    return this.beginDetachFollowerDatabases(
      resourceGroupName,
      clusterName,
      followerDatabaseToRemove,
      options
    ).then((lroPoller) => lroPoller.pollUntilFinished());
  }

  /**
   * Diagnoses network connectivity status for external resources on which the service is dependent
   * on.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersDiagnoseVirtualNetworkResponse>
   */
  diagnoseVirtualNetwork(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.ClustersDiagnoseVirtualNetworkResponse> {
    return this.beginDiagnoseVirtualNetwork(
      resourceGroupName,
      clusterName,
      options
    ).then((lroPoller) => lroPoller.pollUntilFinished()) as Promise<
      Models.ClustersDiagnoseVirtualNetworkResponse
    >;
  }

  /**
   * Lists all Kusto clusters within a resource group.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListByResourceGroupResponse>
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.ClustersListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param callback The callback
   */
  listByResourceGroup(
    resourceGroupName: string,
    callback: msRest.ServiceCallback<Models.ClusterListResult>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(
    resourceGroupName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.ClusterListResult>
  ): void;
  listByResourceGroup(
    resourceGroupName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterListResult>,
    callback?: msRest.ServiceCallback<Models.ClusterListResult>
  ): Promise<Models.ClustersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback
    ) as Promise<Models.ClustersListByResourceGroupResponse>;
  }

  /**
   * Lists all Kusto clusters within a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ClustersListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.ClusterListResult>
  ): void;
  list(
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterListResult>,
    callback?: msRest.ServiceCallback<Models.ClusterListResult>
  ): Promise<Models.ClustersListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback
    ) as Promise<Models.ClustersListResponse>;
  }

  /**
   * Lists eligible SKUs for Kusto resource provider.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListSkusResponse>
   */
  listSkus(options?: msRest.RequestOptionsBase): Promise<Models.ClustersListSkusResponse>;
  /**
   * @param callback The callback
   */
  listSkus(callback: msRest.ServiceCallback<Models.SkuDescriptionList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listSkus(
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.SkuDescriptionList>
  ): void;
  listSkus(
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SkuDescriptionList>,
    callback?: msRest.ServiceCallback<Models.SkuDescriptionList>
  ): Promise<Models.ClustersListSkusResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listSkusOperationSpec,
      callback
    ) as Promise<Models.ClustersListSkusResponse>;
  }

  /**
   * Checks that the cluster name is valid and is not already in use.
   * @param location Azure location (region) name.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersCheckNameAvailabilityResponse>
   */
  checkNameAvailability(
    location: string,
    clusterName: Models.ClusterCheckNameRequest,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.ClustersCheckNameAvailabilityResponse>;
  /**
   * @param location Azure location (region) name.
   * @param clusterName The name of the cluster.
   * @param callback The callback
   */
  checkNameAvailability(
    location: string,
    clusterName: Models.ClusterCheckNameRequest,
    callback: msRest.ServiceCallback<Models.CheckNameResult>
  ): void;
  /**
   * @param location Azure location (region) name.
   * @param clusterName The name of the cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(
    location: string,
    clusterName: Models.ClusterCheckNameRequest,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.CheckNameResult>
  ): void;
  checkNameAvailability(
    location: string,
    clusterName: Models.ClusterCheckNameRequest,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckNameResult>,
    callback?: msRest.ServiceCallback<Models.CheckNameResult>
  ): Promise<Models.ClustersCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        clusterName,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback
    ) as Promise<Models.ClustersCheckNameAvailabilityResponse>;
  }

  /**
   * Returns the SKUs available for the provided resource.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListSkusByResourceResponse>
   */
  listSkusByResource(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.ClustersListSkusByResourceResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param callback The callback
   */
  listSkusByResource(
    resourceGroupName: string,
    clusterName: string,
    callback: msRest.ServiceCallback<Models.ListResourceSkusResult>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  listSkusByResource(
    resourceGroupName: string,
    clusterName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.ListResourceSkusResult>
  ): void;
  listSkusByResource(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListResourceSkusResult>,
    callback?: msRest.ServiceCallback<Models.ListResourceSkusResult>
  ): Promise<Models.ClustersListSkusByResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      listSkusByResourceOperationSpec,
      callback
    ) as Promise<Models.ClustersListSkusByResourceResponse>;
  }

  /**
   * Returns a list of language extensions that can run within KQL queries.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListLanguageExtensionsResponse>
   */
  listLanguageExtensions(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.ClustersListLanguageExtensionsResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param callback The callback
   */
  listLanguageExtensions(
    resourceGroupName: string,
    clusterName: string,
    callback: msRest.ServiceCallback<Models.LanguageExtensionsList>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  listLanguageExtensions(
    resourceGroupName: string,
    clusterName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.LanguageExtensionsList>
  ): void;
  listLanguageExtensions(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LanguageExtensionsList>,
    callback?: msRest.ServiceCallback<Models.LanguageExtensionsList>
  ): Promise<Models.ClustersListLanguageExtensionsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      listLanguageExtensionsOperationSpec,
      callback
    ) as Promise<Models.ClustersListLanguageExtensionsResponse>;
  }

  /**
   * Add a list of language extensions that can run within KQL queries.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param languageExtensionsToAdd The language extensions to add.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  addLanguageExtensions(
    resourceGroupName: string,
    clusterName: string,
    languageExtensionsToAdd: Models.LanguageExtensionsList,
    options?: msRest.RequestOptionsBase
  ): Promise<msRest.RestResponse> {
    return this.beginAddLanguageExtensions(
      resourceGroupName,
      clusterName,
      languageExtensionsToAdd,
      options
    ).then((lroPoller) => lroPoller.pollUntilFinished());
  }

  /**
   * Remove a list of language extensions that can run within KQL queries.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param languageExtensionsToRemove The language extensions to remove.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  removeLanguageExtensions(
    resourceGroupName: string,
    clusterName: string,
    languageExtensionsToRemove: Models.LanguageExtensionsList,
    options?: msRest.RequestOptionsBase
  ): Promise<msRest.RestResponse> {
    return this.beginRemoveLanguageExtensions(
      resourceGroupName,
      clusterName,
      languageExtensionsToRemove,
      options
    ).then((lroPoller) => lroPoller.pollUntilFinished());
  }

  /**
   * Create or update a Kusto cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param parameters The Kusto cluster parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    parameters: Models.Cluster,
    options?: Models.ClustersBeginCreateOrUpdateOptionalParams
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options
    );
  }

  /**
   * Update a Kusto cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param parameters The Kusto cluster parameters supplied to the Update operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    parameters: Models.ClusterUpdate,
    options?: Models.ClustersBeginUpdateOptionalParams
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options
    );
  }

  /**
   * Deletes a Kusto cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      beginDeleteMethodOperationSpec,
      options
    );
  }

  /**
   * Stops a Kusto cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStop(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      beginStopOperationSpec,
      options
    );
  }

  /**
   * Starts a Kusto cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStart(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      beginStartOperationSpec,
      options
    );
  }

  /**
   * Detaches all followers of a database owned by this cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param followerDatabaseToRemove The follower databases properties to remove.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDetachFollowerDatabases(
    resourceGroupName: string,
    clusterName: string,
    followerDatabaseToRemove: Models.FollowerDatabaseDefinition,
    options?: msRest.RequestOptionsBase
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        followerDatabaseToRemove,
        options
      },
      beginDetachFollowerDatabasesOperationSpec,
      options
    );
  }

  /**
   * Diagnoses network connectivity status for external resources on which the service is dependent
   * on.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDiagnoseVirtualNetwork(
    resourceGroupName: string,
    clusterName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      beginDiagnoseVirtualNetworkOperationSpec,
      options
    );
  }

  /**
   * Add a list of language extensions that can run within KQL queries.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param languageExtensionsToAdd The language extensions to add.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginAddLanguageExtensions(
    resourceGroupName: string,
    clusterName: string,
    languageExtensionsToAdd: Models.LanguageExtensionsList,
    options?: msRest.RequestOptionsBase
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        languageExtensionsToAdd,
        options
      },
      beginAddLanguageExtensionsOperationSpec,
      options
    );
  }

  /**
   * Remove a list of language extensions that can run within KQL queries.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param languageExtensionsToRemove The language extensions to remove.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRemoveLanguageExtensions(
    resourceGroupName: string,
    clusterName: string,
    languageExtensionsToRemove: Models.LanguageExtensionsList,
    options?: msRest.RequestOptionsBase
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        languageExtensionsToRemove,
        options
      },
      beginRemoveLanguageExtensionsOperationSpec,
      options
    );
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}",
  urlParameters: [Parameters.resourceGroupName, Parameters.clusterName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listFollowerDatabasesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/listFollowerDatabases",
  urlParameters: [Parameters.resourceGroupName, Parameters.clusterName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.FollowerDatabaseListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters",
  urlParameters: [Parameters.resourceGroupName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Kusto/clusters",
  urlParameters: [Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listSkusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Kusto/skus",
  urlParameters: [Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.SkuDescriptionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/providers/Microsoft.Kusto/locations/{location}/checkNameAvailability",
  urlParameters: [Parameters.subscriptionId, Parameters.location],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "clusterName",
    mapper: {
      ...Mappers.ClusterCheckNameRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listSkusByResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/skus",
  urlParameters: [Parameters.resourceGroupName, Parameters.clusterName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.ListResourceSkusResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listLanguageExtensionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/listLanguageExtensions",
  urlParameters: [Parameters.subscriptionId, Parameters.resourceGroupName, Parameters.clusterName],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.LanguageExtensionsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}",
  urlParameters: [Parameters.resourceGroupName, Parameters.clusterName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.ifMatch, Parameters.ifNoneMatch, Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Cluster,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    201: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}",
  urlParameters: [Parameters.resourceGroupName, Parameters.clusterName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.ifMatch, Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ClusterUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    201: {
      bodyMapper: Mappers.Cluster
    },
    202: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}",
  urlParameters: [Parameters.resourceGroupName, Parameters.clusterName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/stop",
  urlParameters: [Parameters.resourceGroupName, Parameters.clusterName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/start",
  urlParameters: [Parameters.resourceGroupName, Parameters.clusterName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDetachFollowerDatabasesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/detachFollowerDatabases",
  urlParameters: [Parameters.resourceGroupName, Parameters.clusterName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "followerDatabaseToRemove",
    mapper: {
      ...Mappers.FollowerDatabaseDefinition,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDiagnoseVirtualNetworkOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/diagnoseVirtualNetwork",
  urlParameters: [Parameters.resourceGroupName, Parameters.clusterName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.DiagnoseVirtualNetworkResult
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginAddLanguageExtensionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/addLanguageExtensions",
  urlParameters: [Parameters.subscriptionId, Parameters.resourceGroupName, Parameters.clusterName],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "languageExtensionsToAdd",
    mapper: {
      ...Mappers.LanguageExtensionsList,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRemoveLanguageExtensionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/removeLanguageExtensions",
  urlParameters: [Parameters.subscriptionId, Parameters.resourceGroupName, Parameters.clusterName],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "languageExtensionsToRemove",
    mapper: {
      ...Mappers.LanguageExtensionsList,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};