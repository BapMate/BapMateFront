import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import axiosInstance from '..';

export const usePostImage = () => {
  // Retrieve access token from localStorage
  const token = localStorage.getItem('accessToken');
  interface PostImageRequest {
    image: any;
  }
  interface PostImageResponse {
    imageUrl: string;
  }
  const {
    mutate,
    data: dataImage,
    isError: isErrorImage,
    isSuccess: isSuccessImage,
    error: errorImage,
  } = useMutation({
    mutationKey: ['postImage'],
    mutationFn: async (postData: any) => {
      console.log(postData);
      const formData = new FormData();
      formData.append('file', postData);

      const response = await axiosInstance.post('/v1/meetUp/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
        },
        // Add other options as needed (e.g., data for POST requests)
      });
      return response.data.data;
    },
  });

  return {
    postImage: mutate, // The function to trigger the mutation
    isSuccessImage, // Whether the mutation was successful
    isErrorImage, // Whether the mutation resulted in an error
    errorImage, // The error object if there was an error
    dataImage, // The data returned by the mutation if successful
  };
};
