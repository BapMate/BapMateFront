import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';
import { useNavigate } from 'react-router-dom';

/**
 * 모임 생성하기
 * @param postData - The data to be sent in the POST request
 * @returns The result of the mutation, including data, status, error, etc.
 */
export const usePostMeetUp = () => {
  // Retrieve access token from localStorage
  const token = localStorage.getItem('accessToken');
  console.log(token);
  const navigate = useNavigate();

  interface PostMeetUpData {
    name: string;
    introduce: string;
    chatRoomLink: string;
    region: string;
    date: string; // Change the type to string or the format you need
    numberOfPeople: number;
    meetUpAtmosphere: string;
    regionAtmosphere: string;
    restaurant: string;
    representationImage: string;
  }

  const { mutate, data, isError, isSuccess, error } = useMutation({
    mutationKey: ['postMeetUp'],
    mutationFn: async (postData: PostMeetUpData) => {
      const response = await axiosInstance.post('/v1/meetUp/host', postData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
        },
        // Add other options as needed (e.g., data for POST requests)
      });
      return response.data;
    },
    onSuccess: () => {
      navigate('/home');
    },
  });

  return {
    postMeetUp: mutate, // The function to trigger the mutation
    isSuccess, // Whether the mutation was successful
    isError, // Whether the mutation resulted in an error
    error, // The error object if there was an error
    data, // The data returned by the mutation if successful
  };
};
