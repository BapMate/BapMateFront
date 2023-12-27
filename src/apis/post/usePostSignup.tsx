import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * idToken으로 회원가입
 * @param id token
 * @returns access token
 */
export const usePostSignup = (idToken: string | null) => {
  const logintype = 'kakao';

  const {
    mutate,
    data = '',
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ['signup'],
    mutationFn: async (data) => {
      const res = await axiosInstance.post(
        `/v1/auth/${logintype}/signup?idtoken=${idToken}`,
        data,
      );
      return res.data;
    },
  });

  return {
    signup: mutate,
    isPending,
    isSuccess,
    error,
    data,
  };
};
