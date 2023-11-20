import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * access token발급받기
 * @param id token
 * @returns access token
 */
export const usePostIdToken = (idToken: string | null) => {
  const logintype = 'kakao';

  const { mutate, data, error, isSuccess } = useMutation({
    mutationKey: ['accessToken'],
    mutationFn: async (data) => {
      const res = await axiosInstance.post(
        `/v1/auth/${logintype}/idtoken?idtoken=${idToken}`,
        data,
      );
      return res.data;
    },
  });

  return {
    accessToken: mutate,
    isSuccess,
    error,
    data,
  };
};
