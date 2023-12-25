export const getApiUrl = (
  _controller?: string | boolean,
  action?: string | boolean,
  method?: string | boolean,
) => {
  return `${_controller ? "/" + _controller : ""}${action ? "/" + action : ""}${
    method ? "/" + method : ""
  }`;
};
