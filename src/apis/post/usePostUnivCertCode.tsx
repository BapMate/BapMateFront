import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * 학교인증 코드 보내기
 * @param
 * @returns
 */

interface UnivCertCodeData {
  univName: string;
  univEmail: string;
  code: number;
}

export const usePostUnivCertCode = () => {
  const {
    mutate,
    data = '',
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ['univCertCode'],
    mutationFn: async (data: UnivCertCodeData) => {
      const res = await axiosInstance.post(`/v1/univcert/code`, data);
      if (res.status === 500) {
        alert('이미 대학인증 완료한 사용자');
      }
      return res.data;
    },
  });

  return {
    univCertCode: mutate,
    isPending,
    isSuccess,
    error,
    data,
  };
};
