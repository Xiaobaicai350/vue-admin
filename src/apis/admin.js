// 封装管理员相关接口
import request from "@/utils/http";

// 获取所有异常信息
export const listAllUnassignedExInfo = () => {
  return request({
    url: "/admin",
    method: "GET",
  });
};
// 获取所有已经指派给监督员的异常信息
export const listAssigned = () => {
  return request({
    url: "/admin/getMessage",
    method: "GET",
  });
};
