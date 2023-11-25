import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * 생성한 모임 확인
 * @param
 * @returns meetUp data
 */
export const useGetHostingMeetup = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['hostingMeetup'],
    queryFn: async () => {
      const res = await axiosInstance.get(`/v1/meetUp/host`);
      return res.data;
    },
  });

  return {
    hostingMeetup: data || null,
    isLoading,
    error,
  };
};
