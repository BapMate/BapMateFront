import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * 추가정보 받기
 * @param
 * @returns
 */

interface ExtraInfoData {
  name: string;
  universityName: string;
}
export const usePostExtraInfo = () => {
  const {
    mutate,
    data = '',
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ['extraInfo'],
    mutationFn: async (data: ExtraInfoData) => {
      const res = await axiosInstance.post(`/v1/info`, data);
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
