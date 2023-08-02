export const getConfigWithToken = (userToken) => {
  if (userToken) {
    return {
      headers: {
        authorization: `${userToken}`,
      },
    };
  } else {
    throw new Error('Le token est manquant.');
  }
};
