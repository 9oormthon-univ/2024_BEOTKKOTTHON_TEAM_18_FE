import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem
} from '@/components/ui/carousel.tsx';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';

const RecruitingCarousel = () => {
  return (
    <Carousel className={'w-full max-w-sm'}>
      <CarouselContent className={'w-full mx-auto'}>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem
            needBasisFull={false}
            className={'flex justify-center px-0.5'}
            key={`recruiting-item-${index}`}>
            <Card
              className={
                'border-hc-blue border-2 bg-hc-white w-[220px] h-[125px] rounded-2xl'
              }>
              <CardContent className={'flex flex-col gap-y-1 px-3.5'}>
                <div className={'w-full mt-2 flex'}>
                  <Badge
                    className={
                      'w-9 h-4 bg-hc-blue-dark text-hc-white text-[8px]'
                    }>
                    {/* TODO: 대체 필요 */}
                    카공
                  </Badge>
                </div>
                <div className={'w-full flex justify-between'}>
                  <div className={'text-[10px] font-bold text-hc-black'}>
                    띱! 같이 전시회 가실 분 구합니다!
                  </div>
                  <div
                    className={
                      'text-[8px] text-hc-grayDark cursor-pointer underline'
                    }>
                    상세보기
                  </div>
                </div>
                <div className={'flex flex-col gap-y-1'}>
                  <div className={'flex gap-x-1'}>
                    {/* TODO: 대체 필요*/}
                    <div
                      className={'text-[8px] font-semibold text-hc-blue-dark'}>
                      이름 |
                    </div>
                    <div className={'text-[8px] font-semibold text-hc-black'}>
                      김헤쳐
                    </div>
                  </div>
                  <div className={'flex gap-x-1'}>
                    <div
                      className={'text-[8px] font-semibold text-hc-blue-dark'}>
                      인원 |
                    </div>
                    <div className={'text-[8px] font-semibold text-hc-black'}>
                      4명/5명
                    </div>
                  </div>
                  <div className={'flex gap-x-1'}>
                    <div
                      className={'text-[8px] font-semibold text-hc-blue-dark'}>
                      설명 |
                    </div>
                    <div className={'text-[8px] font-semibold text-hc-black'}>
                      전시회 가서 예쁜 그림도 보고 사진도 찍어요~
                    </div>
                  </div>
                </div>
                <div className={'w-full flex justify-end mt-1'}>
                  <Button
                    className={
                      'w-[45px] h-[18px] bg-hc-blue-300 text-hc-white text-[8px] rounded-[12px]'
                    }>
                    나가기
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className={'w-full flex justify-center'}>
        <CarouselDot
          className={'my-3 border-none'}
          focusedDotType={'long'}
        />
      </div>
    </Carousel>
  );
};

export default RecruitingCarousel;
