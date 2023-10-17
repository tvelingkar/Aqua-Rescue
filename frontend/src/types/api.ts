

export type ApiErrorData = {
  code?: string
  message?: string
  httpStatusCode?: string
  path?: string
  timestamp?: string
}

export type ApiResponse<T> = T & {
  error?: ApiErrorData
}
