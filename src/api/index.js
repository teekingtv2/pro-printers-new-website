/* eslint-disable react-hooks/rules-of-hooks */

// import useSWR from 'swr';
import { mutationRequest } from './sendData';
import { fetcher } from './fetcher';
import useSWR from 'swr';

export const userRegister = async (values) => {
  const result = await mutationRequest('/website/register', 'post', values);
  return result;
};
export const donate = async (values) => {
  const result = await mutationRequest('/website/donate', 'post', values);
  return result;
};
export const contact = async (values) => {
  const result = await mutationRequest('/website/contact', 'post', values);
  return result;
};
export const requestQuote = async (values) => {
  const result = await mutationRequest('/website/request-quote', 'post', values);
  return result;
};
export const fetchGallery = () => {
  const { data, error, mutate } = useSWR('/website/gallery', fetcher);
  return {
    posts: data?.posts,
    postsLoading: !error && !data,
    postsError: error,
    mutatePosts: mutate,
  };
};
