## API Report File for "@azure-rest/ai-document-translator"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { KeyCredential } from '@azure/core-auth';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { TokenCredential } from '@azure/core-auth';

// @public (undocumented)
export interface BatchRequest {
    source: SourceInput;
    storageType?: StorageInputType;
    targets: TargetInput[];
}

// @public (undocumented)
export interface CancelTranslation {
    delete(options?: CancelTranslationParameters): Promise<CancelTranslation200Response | CancelTranslation401Response | CancelTranslation404Response | CancelTranslation429Response | CancelTranslation500Response | CancelTranslation503Response>;
    get(options?: GetTranslationStatusParameters): Promise<GetTranslationStatus200Response | GetTranslationStatus401Response | GetTranslationStatus404Response | GetTranslationStatus429Response | GetTranslationStatus500Response | GetTranslationStatus503Response>;
}

// @public
export interface CancelTranslation200Response extends HttpResponse {
    // (undocumented)
    body: TranslationStatus;
    // (undocumented)
    status: "200";
}

// @public
export interface CancelTranslation401Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "401";
}

// @public
export interface CancelTranslation404Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "404";
}

// @public
export interface CancelTranslation429Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "429";
}

// @public
export interface CancelTranslation500Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "500";
}

// @public
export interface CancelTranslation503Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "503";
}

// @public (undocumented)
export type CancelTranslationParameters = RequestParameters;

// @public (undocumented)
export interface DocumentFilter {
    prefix?: string;
    suffix?: string;
}

// @public (undocumented)
export interface DocumentsStatus {
    nextLink?: string;
    value: DocumentStatus[];
}

// @public (undocumented)
export interface DocumentStatus {
    characterCharged?: number;
    createdDateTimeUtc: Date;
    error?: TranslationError;
    id: string;
    lastActionDateTimeUtc: Date;
    path?: string;
    progress: number;
    sourcePath: string;
    status: Status;
    to: string;
}

// @public (undocumented)
function DocumentTranslator(endpoint: string, credentials: TokenCredential | KeyCredential, options?: ClientOptions): DocumentTranslatorClient;

export default DocumentTranslator;

// @public (undocumented)
export type DocumentTranslatorClient = Client & {
    path: Routes;
};

// @public (undocumented)
export interface DocumentTranslatorFactory {
    // (undocumented)
    (endpoint: string, credentials: TokenCredential | KeyCredential, options?: ClientOptions): void;
}

// @public (undocumented)
export interface FileFormat {
    contentTypes: string[];
    defaultVersion?: string;
    fileExtensions: string[];
    format: string;
    versions?: string[];
}

// @public (undocumented)
export interface GetDocumentsStatus {
    get(options?: GetDocumentsStatusParameters): Promise<GetDocumentsStatus200Response | GetDocumentsStatus400Response | GetDocumentsStatus401Response | GetDocumentsStatus404Response | GetDocumentsStatus429Response | GetDocumentsStatus500Response | GetDocumentsStatus503Response>;
}

// @public (undocumented)
export interface GetDocumentsStatus200Headers {
    "retry-after"?: string;
    etag?: string;
}

// @public
export interface GetDocumentsStatus200Response extends HttpResponse {
    // (undocumented)
    body: DocumentsStatus;
    // (undocumented)
    headers: RawHttpHeaders & GetDocumentsStatus200Headers;
    // (undocumented)
    status: "200";
}

// @public
export interface GetDocumentsStatus400Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "400";
}

// @public
export interface GetDocumentsStatus401Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "401";
}

// @public
export interface GetDocumentsStatus404Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "404";
}

// @public
export interface GetDocumentsStatus429Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "429";
}

// @public
export interface GetDocumentsStatus500Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "500";
}

// @public
export interface GetDocumentsStatus503Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "503";
}

// @public (undocumented)
export type GetDocumentsStatusParameters = RequestParameters & GetDocumentsStatusQueryParam;

// @public (undocumented)
export interface GetDocumentsStatusQueryParam {
    // (undocumented)
    queryParameters?: GetDocumentsStatusQueryParamProperties;
}

// @public (undocumented)
export interface GetDocumentsStatusQueryParamProperties {
    $maxpagesize?: number;
    $orderBy?: string[];
    $skip?: number;
    $top?: number;
    createdDateTimeUtcEnd?: Date;
    createdDateTimeUtcStart?: Date;
    ids?: string[];
    statuses?: string[];
}

// @public (undocumented)
export interface GetDocumentStatus {
    get(options?: GetDocumentStatusParameters): Promise<GetDocumentStatus200Response | GetDocumentStatus401Response | GetDocumentStatus404Response | GetDocumentStatus429Response | GetDocumentStatus500Response | GetDocumentStatus503Response>;
}

// @public (undocumented)
export interface GetDocumentStatus200Headers {
    "retry-after"?: string;
    etag?: string;
}

// @public
export interface GetDocumentStatus200Response extends HttpResponse {
    // (undocumented)
    body: DocumentStatus;
    // (undocumented)
    headers: RawHttpHeaders & GetDocumentStatus200Headers;
    // (undocumented)
    status: "200";
}

// @public
export interface GetDocumentStatus401Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "401";
}

// @public
export interface GetDocumentStatus404Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "404";
}

// @public
export interface GetDocumentStatus429Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "429";
}

// @public
export interface GetDocumentStatus500Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "500";
}

// @public
export interface GetDocumentStatus503Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "503";
}

// @public (undocumented)
export type GetDocumentStatusParameters = RequestParameters;

// @public (undocumented)
export interface GetSupportedDocumentFormats {
    get(options?: GetSupportedDocumentFormatsParameters): Promise<GetSupportedDocumentFormats200Response | GetSupportedDocumentFormats429Response | GetSupportedDocumentFormats500Response | GetSupportedDocumentFormats503Response>;
}

// @public (undocumented)
export interface GetSupportedDocumentFormats200Headers {
    "retry-after"?: string;
}

// @public
export interface GetSupportedDocumentFormats200Response extends HttpResponse {
    // (undocumented)
    body: SupportedFileFormats;
    // (undocumented)
    headers: RawHttpHeaders & GetSupportedDocumentFormats200Headers;
    // (undocumented)
    status: "200";
}

// @public
export interface GetSupportedDocumentFormats429Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "429";
}

// @public
export interface GetSupportedDocumentFormats500Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "500";
}

// @public
export interface GetSupportedDocumentFormats503Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "503";
}

// @public (undocumented)
export type GetSupportedDocumentFormatsParameters = RequestParameters;

// @public (undocumented)
export interface GetSupportedGlossaryFormats {
    get(options?: GetSupportedGlossaryFormatsParameters): Promise<GetSupportedGlossaryFormats200Response | GetSupportedGlossaryFormats429Response | GetSupportedGlossaryFormats500Response | GetSupportedGlossaryFormats503Response>;
}

// @public (undocumented)
export interface GetSupportedGlossaryFormats200Headers {
    "retry-after"?: string;
}

// @public
export interface GetSupportedGlossaryFormats200Response extends HttpResponse {
    // (undocumented)
    body: SupportedFileFormats;
    // (undocumented)
    headers: RawHttpHeaders & GetSupportedGlossaryFormats200Headers;
    // (undocumented)
    status: "200";
}

// @public
export interface GetSupportedGlossaryFormats429Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "429";
}

// @public
export interface GetSupportedGlossaryFormats500Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "500";
}

// @public
export interface GetSupportedGlossaryFormats503Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "503";
}

// @public (undocumented)
export type GetSupportedGlossaryFormatsParameters = RequestParameters;

// @public (undocumented)
export interface GetSupportedStorageSources {
    get(options?: GetSupportedStorageSourcesParameters): Promise<GetSupportedStorageSources200Response | GetSupportedStorageSources429Response | GetSupportedStorageSources500Response | GetSupportedStorageSources503Response>;
}

// @public (undocumented)
export interface GetSupportedStorageSources200Headers {
    "retry-after"?: string;
}

// @public
export interface GetSupportedStorageSources200Response extends HttpResponse {
    // (undocumented)
    body: SupportedStorageSources;
    // (undocumented)
    headers: RawHttpHeaders & GetSupportedStorageSources200Headers;
    // (undocumented)
    status: "200";
}

// @public
export interface GetSupportedStorageSources429Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "429";
}

// @public
export interface GetSupportedStorageSources500Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "500";
}

// @public
export interface GetSupportedStorageSources503Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "503";
}

// @public (undocumented)
export type GetSupportedStorageSourcesParameters = RequestParameters;

// @public (undocumented)
export interface GetTranslationsStatus {
    get(options?: GetTranslationsStatusParameters): Promise<GetTranslationsStatus200Response | GetTranslationsStatus400Response | GetTranslationsStatus401Response | GetTranslationsStatus429Response | GetTranslationsStatus500Response | GetTranslationsStatus503Response>;
    post(options: StartTranslationParameters): Promise<StartTranslation202Response | StartTranslation400Response | StartTranslation401Response | StartTranslation429Response | StartTranslation500Response | StartTranslation503Response>;
}

// @public (undocumented)
export interface GetTranslationsStatus200Headers {
    "retry-after"?: string;
    etag?: string;
}

// @public
export interface GetTranslationsStatus200Response extends HttpResponse {
    // (undocumented)
    body: TranslationsStatus;
    // (undocumented)
    headers: RawHttpHeaders & GetTranslationsStatus200Headers;
    // (undocumented)
    status: "200";
}

// @public
export interface GetTranslationsStatus400Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "400";
}

// @public
export interface GetTranslationsStatus401Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "401";
}

// @public
export interface GetTranslationsStatus429Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "429";
}

// @public
export interface GetTranslationsStatus500Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "500";
}

// @public
export interface GetTranslationsStatus503Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "503";
}

// @public (undocumented)
export type GetTranslationsStatusParameters = RequestParameters & GetTranslationsStatusQueryParam;

// @public (undocumented)
export interface GetTranslationsStatusQueryParam {
    // (undocumented)
    queryParameters?: GetTranslationsStatusQueryParamProperties;
}

// @public (undocumented)
export interface GetTranslationsStatusQueryParamProperties {
    $maxpagesize?: number;
    $orderBy?: string[];
    $skip?: number;
    $top?: number;
    createdDateTimeUtcEnd?: Date;
    createdDateTimeUtcStart?: Date;
    ids?: string[];
    statuses?: string[];
}

// @public (undocumented)
export interface GetTranslationStatus200Headers {
    "retry-after"?: string;
    etag?: string;
}

// @public
export interface GetTranslationStatus200Response extends HttpResponse {
    // (undocumented)
    body: TranslationStatus;
    // (undocumented)
    headers: RawHttpHeaders & GetTranslationStatus200Headers;
    // (undocumented)
    status: "200";
}

// @public
export interface GetTranslationStatus401Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "401";
}

// @public
export interface GetTranslationStatus404Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "404";
}

// @public
export interface GetTranslationStatus429Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "429";
}

// @public
export interface GetTranslationStatus500Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "500";
}

// @public
export interface GetTranslationStatus503Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "503";
}

// @public (undocumented)
export type GetTranslationStatusParameters = RequestParameters;

// @public (undocumented)
export interface Glossary {
    format: string;
    glossaryUrl: string;
    storageSource?: StorageSource;
    version?: string;
}

// @public (undocumented)
export interface InnerTranslationError {
    code: string;
    innerError?: InnerTranslationError;
    message: string;
    target?: string;
}

// @public (undocumented)
export interface Routes {
    (path: "/batches"): GetTranslationsStatus;
    (path: "/batches/{id}/documents/{documentId}", id: string, documentId: string): GetDocumentStatus;
    (path: "/batches/{id}", id: string): CancelTranslation;
    (path: "/batches/{id}/documents", id: string): GetDocumentsStatus;
    (path: "/documents/formats"): GetSupportedDocumentFormats;
    (path: "/glossaries/formats"): GetSupportedGlossaryFormats;
    (path: "/storagesources"): GetSupportedStorageSources;
}

// @public (undocumented)
export interface SourceInput {
    // (undocumented)
    filter?: DocumentFilter;
    language?: string;
    sourceUrl: string;
    storageSource?: StorageSource;
}

// @public (undocumented)
export interface StartTranslation202Headers {
    "operation-location"?: string;
}

// @public
export interface StartTranslation202Response extends HttpResponse {
    // (undocumented)
    headers: RawHttpHeaders & StartTranslation202Headers;
    // (undocumented)
    status: "202";
}

// @public
export interface StartTranslation400Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "400";
}

// @public
export interface StartTranslation401Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "401";
}

// @public
export interface StartTranslation429Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "429";
}

// @public
export interface StartTranslation500Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "500";
}

// @public
export interface StartTranslation503Response extends HttpResponse {
    // (undocumented)
    body: TranslationErrorResponse;
    // (undocumented)
    status: "503";
}

// @public (undocumented)
export interface StartTranslationBodyParam {
    // (undocumented)
    body: StartTranslationDetails;
}

// @public (undocumented)
export interface StartTranslationDetails {
    inputs: BatchRequest[];
}

// @public (undocumented)
export type StartTranslationParameters = RequestParameters & StartTranslationBodyParam;

// @public (undocumented)
export type Status = "NotStarted" | "Running" | "Succeeded" | "Failed" | "Cancelled" | "Cancelling" | "ValidationFailed";

// @public (undocumented)
export interface StatusSummary {
    cancelled: number;
    failed: number;
    inProgress: number;
    notYetStarted: number;
    success: number;
    total: number;
    totalCharacterCharged: number;
}

// @public (undocumented)
export type StorageInputType = "Folder" | "File";

// @public (undocumented)
export type StorageSource = "AzureBlob";

// @public (undocumented)
export interface SupportedFileFormats {
    value: FileFormat[];
}

// @public (undocumented)
export interface SupportedStorageSources {
    value: "AzureBlob"[];
}

// @public (undocumented)
export interface TargetInput {
    category?: string;
    glossaries?: Glossary[];
    language: string;
    storageSource?: StorageSource;
    targetUrl: string;
}

// @public (undocumented)
export interface TranslationError {
    code: TranslationErrorCode;
    innerError?: InnerTranslationError;
    message: string;
    target?: string;
}

// @public (undocumented)
export type TranslationErrorCode = "InvalidRequest" | "InvalidArgument" | "InternalServerError" | "ServiceUnavailable" | "ResourceNotFound" | "Unauthorized" | "RequestRateTooHigh";

// @public (undocumented)
export interface TranslationErrorResponse {
    error?: TranslationError;
}

// @public (undocumented)
export interface TranslationsStatus {
    nextLink?: string;
    value: TranslationStatus[];
}

// @public (undocumented)
export interface TranslationStatus {
    createdDateTimeUtc: Date;
    error?: TranslationError;
    id: string;
    lastActionDateTimeUtc: Date;
    status: Status;
    // (undocumented)
    summary: StatusSummary;
}


```