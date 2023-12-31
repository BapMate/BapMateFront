import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';
import { useNavigate } from 'react-router';

/**
 * 취미 키워드 받기
 * @param
 * @returns
 */
interface HobbyInfoData {
  strings: string[];
}

export const usePostHobbies = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
  const {
    mutate,
    data = [],
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ['hobbyInfo'],
    mutationFn: async (postData: HobbyInfoData) => {
      const res = await axiosInstance.post(`/v1/auth/userHobby`, postData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      });
      return res.data;
    },
    onSuccess: () => {
      navigate('/signup/favor/2');
    },
  });

  return {
    hobbyInfo: mutate,
    isPending,
    isSuccess,
    error,
    data,
  };
};
