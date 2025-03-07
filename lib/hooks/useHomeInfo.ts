import { useState, useEffect } from "react";

const useFetchHomeInfo = () => {
  const [homeInfo, setHomeInfo] = useState<{
    about: string;
    whychooseus: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
    brands: Array<String>;
  } | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchHomeInfo = async () => {
      try {
        const response = await fetch("/website/home.json");
        const data = await response.json();
        setHomeInfo(data[0]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching home information:", error);
        setError(error instanceof Error ? error : new Error("Unknown error"));
        setIsLoading(false);
      }
    };

    fetchHomeInfo();
  }, []);

  return { homeInfo, isLoading, error };
};

export default useFetchHomeInfo;
