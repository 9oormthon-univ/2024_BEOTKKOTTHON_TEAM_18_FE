import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import Input from '@/components/common/Input.tsx';
import { EllipsisVerticalIcon } from 'lucide-react';
import { useSuspenseQuery } from '@tanstack/react-query';
import getDdeepDetail from '@/apis/getDdeepDetail.ts';
import { useRef } from 'react';
import createComment from '@/apis/createComment.ts';
import { toast } from 'sonner';

const DdeepDetail = () => {
  const { id } = useParams<{ id: string }>();
  const commentInputRef = useRef<HTMLInputElement>(null);
  const { data, isPending, error, refetch } = useSuspenseQuery({
    queryKey: ['ddeep', id],
    queryFn: () => getDdeepDetail(id!)
  });

  const handleSubmitComment = () => {
    if (commentInputRef.current) {
      createComment({ id: id, content: commentInputRef.current.value }).then(
        (res) => {
          if (res.isSuccess === true) {
            toast.success('댓글이 작성되었습니다!');
            refetch();
          }
          if (res.isSuccess === false) {
            toast.error('댓글 작성에 실패했습니다!');
            refetch();
          }
        }
      );
    }
  };

  if (isPending) {
    return <div>띱 정보를 불러오는 중입니다...</div>;
  }

  if (error) {
    return <div>띱 정보를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <div className={'w-full flex flex-col items-center'}>
      <Card
        className={
          'border-none bg-hc-grayLighter w-[358px] h-[200px] rounded-2xl mt-5'
        }>
        <CardContent className={'flex flex-col gap-y-2.5 px-3.5'}>
          <div className={'w-full mt-3 flex'}>
            <Badge
              className={
                'w-14 h-6 bg-hc-blue-dark text-hc-white text-[12px] flex justify-center'
              }>
              {data.result.recruitment.type}
            </Badge>
          </div>
          <div className={'w-full flex justify-between'}>
            <div className={'text-[16px] font-bold text-hc-black'}>
              {data.result.recruitment.name}
            </div>
          </div>
          <div className={'flex flex-col gap-y-1'}>
            <div className={'flex gap-x-1'}>
              <div className={'text-[12px] font-semibold text-hc-blue-dark'}>
                이름 |
              </div>
              <div className={'text-[12px] font-semibold text-hc-black'}>
                {data.result.recruitment.leader}
              </div>
            </div>
            <div className={'flex gap-x-1'}>
              <div className={'text-[12px] font-semibold text-hc-blue-dark'}>
                인원 |
              </div>
              <div className={'text-[12px] font-semibold text-hc-black'}>
                {`${data.result.recruitment.participantNumber}명/${data.result.recruitment.participantLimit}명`}
              </div>
            </div>
            <div className={'flex gap-x-1'}>
              <div className={'text-[12px] font-semibold text-hc-blue-dark'}>
                설명 |
              </div>
              <div className={'text-[12px] font-semibold text-hc-black'}>
                {data.result.recruitment.description}
              </div>
            </div>
          </div>
          <div className={'w-full flex justify-end mt-1'}>
            <Button
              className={
                'w-[75px] h-[30px] bg-hc-blue-300 text-hc-white text-[12px] rounded-[12px]'
              }>
              나가기
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className={'w-full flex justify-start mt-2 ml-8 items-center'}>
        <div className={'text-[14px] font-semibold text-hc-blue-darker'}>
          {`댓글 (${data.result.commentCount})`}
        </div>
      </div>
      <Input
        variant={'gray'}
        className={
          'w-[358px] h-[43px] bg-hc-grayLighter border-hc-grayLighter mt-3'
        }
        placeholder={'댓글을 입력하세요'}
        ref={commentInputRef}
        hasCommentButton
        submithandler={handleSubmitComment}
      />
      {data.result.commentList.map((comment) => (
        <div
          className={
            'w-[358px] h-[73px] flex flex-col rounded-2xl bg-hc-grayLighter mt-3'
          }
          key={`comment-${comment.commentIdx}`}>
          <div className={'px-6 pt-3.5 flex justify-between items-center'}>
            <div className={'flex items-end'}>
              <div className={'font-bold text-[16px] text-hc-black'}>
                {comment.writer}
              </div>
              <div className={'text-[10px] text-hc-grayDark ml-2'}>
                {comment.createdDate}
              </div>
            </div>
            <div className={'text-[10px] text-hc-grayDark ml-2 cursor-pointer'}>
              <EllipsisVerticalIcon size={14} />
            </div>
          </div>
          <div className={'px-6 pt-1 text-[12px] text-hc-black'}>
            {comment.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DdeepDetail;
