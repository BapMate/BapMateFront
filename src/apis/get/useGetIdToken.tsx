import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * id token발급받기
 * @param 카카오 코드
 * @returns id Token
 */
export const useGetIdToken = (code: string | null) => {
  const logintype = 'kakao';

  const { isLoading, data, error } = useQuery({
    queryKey: ['idToken'],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/v1/auth/${logintype}/idtoken?code=${code}`,
      );
      return res.data.idToken;
    },
  });

  return {
    idToken: data || null,
    isLoading,
    error,
  };
};
