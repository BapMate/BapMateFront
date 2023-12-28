import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * 모임 상세 페이지로 이동하기
 * @param meetUpId - 가져올 모임의 ID
 * @returns meetUpDetail data
 */
export const useGetMeetUpDetail = (meetUpId: string) => {
  const token = localStorage.getItem('accessToken');

  const { isLoading, data, error } = useQuery({
    queryKey: ['meetUpDetail', meetUpId],
    queryFn: async () => {
      const res = await axiosInstance.get(`/v1/meetUp/hosts/${meetUpId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
        },
        params: {
          meetUpId: meetUpId,
        },
      });
      return res.data;
    },
  });

  return {
    meetUpDetail: data || null,
    isLoading,
    error,
  };
};
