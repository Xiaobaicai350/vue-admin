// 封装管理员相关接口
import request from "@/utils/http";

//admin登录
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

// 获取所有委派信息
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

// 把异常信息指派给检测员
export const postExToAQI = () => {
  return request({
    url: "/admin/giveStaff/:exId/:aqiId",
    method: "POST",
  });
};

//获取全部的检测员
export const getStaff = () => {
  return request({
    url: "/admin/getStaff",
    method: "GET",
  });
};

//获取检测员检测后的数据
export const testResult = () => {
  return request({
    url: "/admin/result",
    method: "GET",
  });
};

//admin信息
export const info = () => {
  return request({
    url: "/admin/info",
    method: "GET",
  });
};
