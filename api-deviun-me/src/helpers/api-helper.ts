export const apiResponse = (successful: boolean, result: any) => {
  if (successful) {
    return {
      ok: successful,
      result,
    };
  }

  return {
    ok: successful,
    error: result,
  };
};

export const apiResponseOK = (result: any) => apiResponse(true, result);
export const apiResponseError = (error: any) => apiResponse(false, error);
