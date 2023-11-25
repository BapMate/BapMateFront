import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * 추가정보 받기
 * @param
 * @returns
 */
export const usePostExtraInfo = () => {
  const {
    mutate,
    data = '',
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ['extraInfo'],
    mutationFn: async (data) => {
      const res = await axiosInstance.post(`/v1/info`, {
        name: '이한비',
        universityName: '홍익대학교',
      });
      return res.data;
    },
  });

  return {
    extraInfo: mutate,
    isPending,
    isSuccess,
    error,
    data,
  };
};
