import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';
import { useNavigate } from 'react-router';

/**
 * 성격 키워드 받기
 * @param
 * @returns
 */
interface PersonalityInfoData {
  humorous: number;
  lively: number;
  talkative: number;
  high_energy: number;
  constructive: number;
  self_improving: number;
  passionate: number;
  ambitious: number;
  empathetic: number;
  sensible: number;
  approachable: number;
  good_listener: number;
  shy: number;
  reserved: number;
  quiet: number;
  timid: number;
  spontaneous: number;
  adventurous: number;
  creative: number;
  good_under_pressure: number;
}

export const usePostPesonal = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
  const {
    mutate,
    data = [],
    isPending,
    error,
    isSuccess: isPersonalitySuccess,
  } = useMutation({
    mutationKey: ['personalityInfo'],
    mutationFn: async (postData: PersonalityInfoData) => {
      const res = await axiosInstance.post(
        `/v1/auth/userPersonality`,
        postData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      return res.data;
    },
    onSuccess: () => {
      navigate('/home');
    },
  });

  return {
    personalityInfo: mutate,
    isPending,
    isPersonalitySuccess,
    error,
    data,
  };
};
