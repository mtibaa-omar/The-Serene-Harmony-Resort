import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActicity() {
  const { isLoading, data: activities } = useQuery({
    queryKey: ["today-activity"],
    queryFn: getStaysTodayActivity,
  });
  return { isLoading, activities };
}
