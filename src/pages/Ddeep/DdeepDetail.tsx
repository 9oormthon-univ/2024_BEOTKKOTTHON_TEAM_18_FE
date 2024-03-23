import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import Input from '@/components/common/Input.tsx';
import { EllipsisVerticalIcon } from 'lucide-react';

const DdeepDetail = () => {
  const { id } = useParams<{ id: string }>();
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
              {/* TODO: 대체 필요 */}
              전시회
            </Badge>
          </div>
          <div className={'w-full flex justify-between'}>
            <div className={'text-[16px] font-bold text-hc-black'}>
              띱! 같이 전시회 가실 분 구합니다!
            </div>
          </div>
          <div className={'flex flex-col gap-y-1'}>
            <div className={'flex gap-x-1'}>
              {/* TODO: 대체 필요*/}
              <div className={'text-[12px] font-semibold text-hc-blue-dark'}>
                이름 |
              </div>
              <div className={'text-[12px] font-semibold text-hc-black'}>
                김헤쳐
              </div>
            </div>
            <div className={'flex gap-x-1'}>
              <div className={'text-[12px] font-semibold text-hc-blue-dark'}>
                인원 |
              </div>
              <div className={'text-[12px] font-semibold text-hc-black'}>
                4명/5명
              </div>
            </div>
            <div className={'flex gap-x-1'}>
              <div className={'text-[12px] font-semibold text-hc-blue-dark'}>
                설명 |
              </div>
              <div className={'text-[12px] font-semibold text-hc-black'}>
                전시회 가서 예쁜 그림도 보고 사진도 찍어요~
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
          댓글 (1)
        </div>
      </div>
      <Input
        variant={'gray'}
        className={
          'w-[358px] h-[43px] bg-hc-grayLighter border-hc-grayLighter mt-3'
        }
        placeholder={'댓글을 입력하세요'}
        hasCommentButton
      />
      <div
        className={
          'w-[358px] h-[73px] flex flex-col rounded-2xl bg-hc-grayLighter mt-3'
        }>
        <div className={'px-6 pt-3.5 flex justify-between items-center'}>
          <div className={'flex items-end'}>
            <div className={'font-bold text-[16px] text-hc-black'}>김밥</div>
            <div className={'text-[10px] text-hc-grayDark ml-2'}>2시간 전</div>
          </div>
          <div className={'text-[10px] text-hc-grayDark ml-2 cursor-pointer'}>
            <EllipsisVerticalIcon size={14} />
          </div>
        </div>
        <div className={'px-6 pt-1 text-[12px] text-hc-black'}>
          오 일정은 언제일까요?
        </div>
      </div>
    </div>
  );
};

export default DdeepDetail;
