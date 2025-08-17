export const FormatDate = ({ date }:{date:string}) => {
    const formatDate = new Date(date).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    return formatDate;
  };