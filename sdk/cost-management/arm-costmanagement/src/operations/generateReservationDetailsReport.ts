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
import * as Mappers from "../models/generateReservationDetailsReportMappers";
import * as Parameters from "../models/parameters";
import { CostManagementClientContext } from "../costManagementClientContext";

/** Class representing a GenerateReservationDetailsReport. */
export class GenerateReservationDetailsReport {
  private readonly client: CostManagementClientContext;

  /**
   * Create a GenerateReservationDetailsReport.
   * @param {CostManagementClientContext} client Reference to the service client.
   */
  constructor(client: CostManagementClientContext) {
    this.client = client;
  }

  /**
   * Generates the reservations details report for provided date range asynchronously based on
   * enrollment id.
   * @param billingAccountId Enrollment ID (Legacy BillingAccount ID)
   * @param startDate Start Date
   * @param endDate End Date
   * @param [options] The optional parameters
   * @returns Promise<Models.GenerateReservationDetailsReportByBillingAccountIdResponse>
   */
  byBillingAccountId(billingAccountId: string, startDate: string, endDate: string, options?: msRest.RequestOptionsBase): Promise<Models.GenerateReservationDetailsReportByBillingAccountIdResponse> {
    return this.beginByBillingAccountId(billingAccountId,startDate,endDate,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.GenerateReservationDetailsReportByBillingAccountIdResponse>;
  }

  /**
   * Generates the reservations details report for provided date range asynchronously by billing
   * profile.
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId BillingProfile ID
   * @param startDate Start Date
   * @param endDate End Date
   * @param [options] The optional parameters
   * @returns Promise<Models.GenerateReservationDetailsReportByBillingProfileIdResponse>
   */
  byBillingProfileId(billingAccountId: string, billingProfileId: string, startDate: string, endDate: string, options?: msRest.RequestOptionsBase): Promise<Models.GenerateReservationDetailsReportByBillingProfileIdResponse> {
    return this.beginByBillingProfileId(billingAccountId,billingProfileId,startDate,endDate,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.GenerateReservationDetailsReportByBillingProfileIdResponse>;
  }

  /**
   * Generates the reservations details report for provided date range asynchronously based on
   * enrollment id.
   * @param billingAccountId Enrollment ID (Legacy BillingAccount ID)
   * @param startDate Start Date
   * @param endDate End Date
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginByBillingAccountId(billingAccountId: string, startDate: string, endDate: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        billingAccountId,
        startDate,
        endDate,
        options
      },
      beginByBillingAccountIdOperationSpec,
      options);
  }

  /**
   * Generates the reservations details report for provided date range asynchronously by billing
   * profile.
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId BillingProfile ID
   * @param startDate Start Date
   * @param endDate End Date
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginByBillingProfileId(billingAccountId: string, billingProfileId: string, startDate: string, endDate: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        billingAccountId,
        billingProfileId,
        startDate,
        endDate,
        options
      },
      beginByBillingProfileIdOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginByBillingAccountIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/generateReservationDetailsReport",
  urlParameters: [
    Parameters.billingAccountId
  ],
  queryParameters: [
    Parameters.startDate,
    Parameters.endDate,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus,
      headersMapper: Mappers.GenerateReservationDetailsReportByBillingAccountIdHeaders
    },
    202: {
      headersMapper: Mappers.GenerateReservationDetailsReportByBillingAccountIdHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.GenerateReservationDetailsReportByBillingAccountIdHeaders
    }
  },
  serializer
};

const beginByBillingProfileIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/providers/Microsoft.CostManagement/generateReservationDetailsReport",
  urlParameters: [
    Parameters.billingAccountId,
    Parameters.billingProfileId
  ],
  queryParameters: [
    Parameters.startDate,
    Parameters.endDate,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus,
      headersMapper: Mappers.GenerateReservationDetailsReportByBillingProfileIdHeaders
    },
    202: {
      headersMapper: Mappers.GenerateReservationDetailsReportByBillingProfileIdHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.GenerateReservationDetailsReportByBillingProfileIdHeaders
    }
  },
  serializer
};