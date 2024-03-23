import { baseInstance } from '@/apis/index.ts';

interface CreateCommentData {
  id: string;
  content: string;
}
const createComment = async ({ id, content }: CreateCommentData) => {
  try {
    const res = await baseInstance.post(`/comments`, {
      recruitmentIdx: id,
      content: content
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default createComment;
