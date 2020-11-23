import axios from 'axios';
import { get as getl } from 'lodash';
import { notification } from 'antd';

export let server = 'http://localhost:5000';

function getHeaders(type: string) {
  const token = localStorage.getItem('token');

  return {
    Authorization: token || '',
    'Content-Type': type || 'application/json',
  };
}

interface IHttpMethod {
  method?: 'get' | 'post' | 'patch' | 'delete';
  url: string;
  data?: any;
  type?: string;
}

const successHandler = (res: any) => {
  const messageTitle = getl(res, 'data.message');
  const messageDescription = getl(res, 'data.message');
  const show = getl(res, 'data.show', false);

  if (show) {
    notification.success({
      message: messageTitle,
      description: messageDescription,
      duration: 1,
    });
  } else {
    // console.log(res);
  }
};

const failHandler = (res: any) => {
  const messageTitle = getl(res, 'response.data.message', '');
  const isFail = getl(res, 'response.data.fail', true);
  const statusCode = getl(res, 'response.status', '');
  const statusText = getl(res, 'response.statusText', '');

  if (statusCode === 500) {
    notification.error({
      key: messageTitle,
      message: statusText,
      duration: 10,
    });
  }

  if (isFail && messageTitle) {
    notification.error({
      key: messageTitle,
      message: messageTitle,
      duration: 0,
    });
  } else {
    console.log(res);
  }
};

function httpMethod({ method, url, data, type = '' }: IHttpMethod) {
  return axios({
    method,
    url: server + url,
    data,
    headers: getHeaders(type),
  })
    .then((res) => {
      successHandler(res);
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      failHandler(error);
      return error;
    });
}

export function get({ url, data }: IHttpMethod) {
  return httpMethod({ method: 'get', url, data });
}

export function post({ url, data, type }: IHttpMethod) {
  return httpMethod({ method: 'post', url, data, type });
}

export function patch({ url, data, type }: IHttpMethod) {
  return httpMethod({ method: 'patch', url, data, type });
}

export function del({ url, data }: IHttpMethod) {
  return httpMethod({ method: 'delete', url, data });
}
