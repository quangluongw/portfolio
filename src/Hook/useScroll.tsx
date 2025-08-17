import { useEffect, RefObject } from "react";

const useScroll = (
  refTab: RefObject<HTMLElement> | null = null,
  refList: RefObject<HTMLElement[]> | null = null
) => {
  useEffect(() => {
    if (refList?.current) {

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        refList.current?.forEach((div: HTMLElement) => {
          const offsetTop = div.getBoundingClientRect().top + scrollPosition;
          if (scrollPosition >= offsetTop - window.innerHeight / 1.5) {
            div.classList.add("active");
          } else {
            div.classList.remove("active");
          }
        });
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [refTab, refList]);
};

export default useScroll;
