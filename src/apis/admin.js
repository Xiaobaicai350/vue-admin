// 封装管理员相关接口
import request from "@/utils/http";

// 获取所有未指派的异常信息
export const listAllUnassignedExInfo = () => {
  return request({
    url: "/admin",
    method: "GET",
  });
};
