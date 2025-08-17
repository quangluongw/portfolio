export const getTags = async () => {
  try {
    const res = await fetch("https://be-blog-eight.vercel.app/api/tag");
    if (!res.ok) {
      throw new Error(`Failed to fetch : ${res.status}`);
    }
    const tags = await res.json();
    return tags;
  } catch (error) {
    console.error("Error fetching :", error);
    return [];
  }
};
