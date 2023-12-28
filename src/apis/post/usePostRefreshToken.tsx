import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';
import { useNavigate } from 'react-router';

/**
 * refresh token으로 access token발급받기
 * @param refresh token
 * @returns access token
 */
export const usePostRefreshToken = (refreshToken: string | null) => {
  const {
    mutate,
    data = '',
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ['refreshToken'],
    mutationFn: async (data) => {
      const res = await axiosInstance.post(
        `/v1/auth/login?refresh=${refreshToken}`,
        data,
      );
      return res.data;
    },
  });

  return {
    refreshToken: mutate,
    isPending,
    isSuccess,
    error,
    data,
  };
};
