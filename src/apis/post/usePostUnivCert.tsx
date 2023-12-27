import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * 학교인증 코드 받기
 * @param
 * @returns
 */

interface UnivCertData {
  univName: string;
  univEmail: string;
}

export const usePostUnivCert = () => {
  const {
    mutate,
    data = '',
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ['univCert'],
    mutationFn: async (data: UnivCertData) => {
      const res = await axiosInstance.post(`/v1/univCert`, data);
      return res.data;
    },
  });

  return {
    univCert: mutate,
    isPending,
    isSuccess,
    error,
    data,
  };
};
