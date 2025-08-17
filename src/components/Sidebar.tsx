import { getCategorys } from "@/services/caterory";
import { getTags } from "@/services/tag";
import { Filter } from "lucide-react";
import FilterBlog from "./Filter";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Suspense } from "react";

const Sidebar = async () => {
  const category = await getCategorys();
  const tag = await getTags();

  return (
    <div className=" md:mb-0 mb-10 md:w-56 left-5 space-y-6 sticky top-[75px] z-50">
      <Card className="shadow-sm sticky top-32">
        <CardHeader className="max-[760px]:px-4">
          <CardTitle className="flex items-center gap-2 text-lg ">
            <Filter className="h-5 w-5 text-primary" />
            Bộ lọc bài viết
          </CardTitle>
        </CardHeader>
        <Suspense fallback={<div>Đang tải bộ lọc…</div>}>

        <FilterBlog category={category} tag={tag} />
        </Suspense>
      </Card>
    </div>
  );
};

export default Sidebar;
