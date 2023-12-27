import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';
import { useNavigate } from 'react-router';

/**
 * 식사량,속도 키워드 받기
 * @param
 * @returns
 */
interface EatingInfoData {
  amount: string;
  pace: string;
}

export const usePostUserEating = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
  const {
    mutate,
    data = [],
    isPending,
    error,
    isSuccess: isEatingSuccess,
  } = useMutation({
    mutationKey: ['eatingInfo'],
    mutationFn: async (postData: EatingInfoData) => {
      const res = await axiosInstance.post(`/v1/auth/userEating`, postData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      });
      return res.data;
    },
    onSuccess: () => {
      navigate('/signup/favor/3');
    },
  });

  return {
    eatingInfo: mutate,
    isPending,
    isEatingSuccess,
    error,
    data,
  };
};
