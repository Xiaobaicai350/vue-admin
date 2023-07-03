// 封装管理员相关接口
import request from "@/utils/http";

// 获取所有异常信息
export const listAllUnassignedExInfo = () => {
  return request({
    url: "/admin",
    method: "GET",
  });
};
// 获取所有异常信息
export const listAssigned = () => {
  return request({
    url: "/admin/getMessage",
    method: "GET",
  });
};

// 获取委派给每个检测员的异常信息
export const listAssignedInfo = () => {
  return request({
    url: "/admin",
    method: "GET",
  });
};
//监督员登录
export const login = ({ id, password }) => {
  return request({
    url: "/admin/login",
    method: "POST",
    data: {
      id,
      password,
    },
  });
};
