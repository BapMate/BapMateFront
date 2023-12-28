import { useQuery } from '@tanstack/react-query';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';
import { useNavigate, useParams } from 'react-router';

/**
 * 참여하기
 * @param meetUpId - 가져올 모임의 ID
 * @returns meetUpDetail data
 */
const usePostParticipate = (meetUpId: string) => {
  const mutation = useMutation({
    mutationFn: async (meetUpId: string) => {
      const response = await axiosInstance.post(
        `/v1/meetUp/participate/${meetUpId}`,
        null,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Origin': '*',
          },
          params: {
            meetUpId: meetUpId,
          },
        },
      );
      return response.data;
    },
  });

  return mutation;
};

export default usePostParticipate;
