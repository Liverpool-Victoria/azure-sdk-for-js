/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const alertId: msRest.OperationURLParameter = {
  parameterPath: "alertId",
  mapper: {
    required: true,
    serializedName: "alertId",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const billingAccountId: msRest.OperationURLParameter = {
  parameterPath: "billingAccountId",
  mapper: {
    required: true,
    serializedName: "billingAccountId",
    type: {
      name: "String"
    }
  }
};
export const billingProfileId: msRest.OperationURLParameter = {
  parameterPath: "billingProfileId",
  mapper: {
    required: true,
    serializedName: "billingProfileId",
    type: {
      name: "String"
    }
  }
};
export const endDate: msRest.OperationQueryParameter = {
  parameterPath: "endDate",
  mapper: {
    required: true,
    serializedName: "endDate",
    type: {
      name: "String"
    }
  }
};
export const expand: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};
export const exportName: msRest.OperationURLParameter = {
  parameterPath: "exportName",
  mapper: {
    required: true,
    serializedName: "exportName",
    type: {
      name: "String"
    }
  }
};
export const externalCloudProviderId: msRest.OperationURLParameter = {
  parameterPath: "externalCloudProviderId",
  mapper: {
    required: true,
    serializedName: "externalCloudProviderId",
    type: {
      name: "String"
    }
  }
};
export const externalCloudProviderType: msRest.OperationURLParameter = {
  parameterPath: "externalCloudProviderType",
  mapper: {
    required: true,
    serializedName: "externalCloudProviderType",
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const scope0: msRest.OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    required: true,
    serializedName: "scope",
    type: {
      name: "String"
    }
  }
};
export const scope1: msRest.OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    required: true,
    serializedName: "scope",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const settingName: msRest.OperationURLParameter = {
  parameterPath: "settingName",
  mapper: {
    required: true,
    serializedName: "settingName",
    constraints: {
      MaxLength: 32
    },
    type: {
      name: "String"
    }
  }
};
export const skiptoken: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skiptoken"
  ],
  mapper: {
    serializedName: "$skiptoken",
    type: {
      name: "String"
    }
  }
};
export const startDate: msRest.OperationQueryParameter = {
  parameterPath: "startDate",
  mapper: {
    required: true,
    serializedName: "startDate",
    type: {
      name: "String"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const viewName: msRest.OperationURLParameter = {
  parameterPath: "viewName",
  mapper: {
    required: true,
    serializedName: "viewName",
    type: {
      name: "String"
    }
  }
};
