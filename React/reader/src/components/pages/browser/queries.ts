import { get, patch, post, del } from '../../../utils/httpMethods';
import { connect } from 'react-redux';

export async function queryGetAllStories(): Promise<any> {
  const data = await get({ url: `/story` });
  console.log(data);
  return data;
}
