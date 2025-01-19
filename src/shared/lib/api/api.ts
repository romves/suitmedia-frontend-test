import { ApiResponse } from './types';

export async function apiFetch<T>({
  url,
  options = {},
  isFormData = false,
  errorMessage = 'Error fetching data',
  successMessage = 'Success',
}: {
  url: string;
  options?: RequestInit;
  isFormData?: boolean;
  errorMessage?: string;
  successMessage?: string;
}): Promise<ApiResponse<T>> {
  const defaultHeaders: Record<string, string> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (isFormData) {
    defaultHeaders['Content-Type'] = 'multipart/form-data';
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    return processResponse<T>(response, errorMessage, successMessage);
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      message: errorMessage,
    };
  }
}

async function parseJSON<T>(response: Response): Promise<T> {
  try {
    return await response.json();
  } catch (error) {
    throw new Error(
      `Invalid JSON response: ${error instanceof Error ? error.message : 'Unknown parsing error'}`,
    );
  }
}

async function handleErrorResponse(
  response: Response,
  defaultError: string,
): Promise<string> {
  try {
    const errorData = await response.json();
    return errorData.message || errorData.error || defaultError;
  } catch {
    return response.statusText || defaultError;
  }
}

async function processResponse<T>(
  response: Response,
  errorMessage: string,
  successMessage: string,
): Promise<ApiResponse<T>> {
  if (!response.ok) {
    const message = await handleErrorResponse(response, errorMessage);
    return {
      success: false,
      error: message,
      message,
    };
  }

  if (response.status === 204) {
    return {
      success: true,
      message: successMessage,
    };
  }

  try {
    const data = await parseJSON<T>(response);
    return {
      success: true,
      data,
      message: successMessage,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: `${errorMessage}: Failed to parse response`,
    };
  }
}
