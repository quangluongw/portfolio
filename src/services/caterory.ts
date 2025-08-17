export const getCategorys = async () => {
  try {
    const res = await fetch("https://be-blog-eight.vercel.app/api/category");
    if (!res.ok) {
      throw new Error(`Failed to fetch : ${res.status}`);
    }
    const categorys = await res.json();
    return categorys;
  } catch (error) {
    console.error("Error fetching :", error);
    return [];
  }
};
