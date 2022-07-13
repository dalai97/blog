import useSWR from "swr";
export const usePosts = ({ posts }) => {
  const { data, error } = useSWR(`/api/posts`, {
    initialData: posts,
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      console.log("error try" + retryCount);
      // Never retry on 404.
      if (error.status === 404) return;

      // Never retry for a specific key.
      if (key === "/api/user") return;

      // Only retry up to 10 times.
      if (retryCount >= 10) return;

      // Retry after 5 seconds.
      setTimeout(() => revalidate({ retryCount }), 1000);
    },
  });

  return { data, isLoading: !error && !data, error };
};
