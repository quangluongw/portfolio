"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {

  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = parseInt(searchParams.get("page") || "1", 10) || 1;

  const pagination = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString());
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="flex items-center justify-center">
      <nav className="flex items-center gap-1" aria-label="Pagination">
        {/* Previous Button */}
        <button
          onClick={() => pagination(currentPage - 1)}
          disabled={currentPage <= 1}
          className="flex items-center justify-center w-10 h-10 rounded-lg border text-gray-500 hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500 transition-all duration-200 shadow-sm hover:shadow-md"
          aria-label="Previous page"
        >
          <ArrowLeft size={16} />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1 mx-2">
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => pagination(pageNum)}
                className={`
                  flex items-center cursor-pointer justify-center w-10 h-10 rounded-lg border transition-all duration-200 font-medium text-sm
                  ${
                    currentPage === pageNum
                      ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow-md"
                  }
                `}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={() => pagination(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50  disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500 transition-all duration-200 shadow-sm hover:shadow-md"
          aria-label="Next page"
        >
          <ArrowRight size={16} />
        </button>
      </nav>

      {/* Page Info */}
      <div className="ml-6 text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
