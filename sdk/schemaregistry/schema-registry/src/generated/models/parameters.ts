/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-http";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "text/plain; charset=utf-8",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const schemaId: OperationURLParameter = {
  parameterPath: "schemaId",
  mapper: {
    serializedName: "schema-id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-09-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "text/plain; charset=utf-8",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const schemaContent: OperationParameter = {
  parameterPath: "schemaContent",
  mapper: {
    serializedName: "schemaContent",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const groupName: OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    serializedName: "group-name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const schemaName: OperationURLParameter = {
  parameterPath: "schemaName",
  mapper: {
    serializedName: "schema-name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const serializationType: OperationParameter = {
  parameterPath: "serializationType",
  mapper: {
    serializedName: "Serialization-Type",
    required: true,
    type: {
      name: "String"
    }
  }
};