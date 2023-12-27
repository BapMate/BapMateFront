import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';
import { useNavigate, useParams } from 'react-router';

/**
 * 참여하기
 * @param meetUpId - 가져올 모임의 ID
 * @returns meetUpDetail data
 */
export const usePostParticipate = () => {
  const token = localStorage.getItem('accessToken');
  const { meetUpId } = useParams();

  const {
    mutate,
    data,
    error: participateError,
    isSuccess: isParticipateSuccess,
  } = useMutation({
    mutationKey: ['participate'],
    mutationFn: async () => {
      const res = await axiosInstance.post(
        `/v1/meetUp/participate/${meetUpId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
          },
          params: {
            meetUpId: meetUpId,
          },
        },
      );
      return res.data;
    },
  });

  return {
    participate: mutate,
    participateError,
    isParticipateSuccess,
  };
};
