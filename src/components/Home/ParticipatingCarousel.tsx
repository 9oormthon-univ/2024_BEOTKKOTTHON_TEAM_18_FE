import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem
} from '@/components/ui/carousel.tsx';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { DdeepInfo } from '@/types';

interface ParticipatingCarouselProps {
  data: DdeepInfo[];
}

const ParticipatingCarousel = ({ data }: ParticipatingCarouselProps) => {
  return (
    <Carousel className={'w-full max-w-sm'}>
      <CarouselContent className={'w-full mx-auto'}>
        {data.map((ddeep, index) => (
          <CarouselItem
            needBasisFull={true}
            className={'flex justify-center'}
            key={`participating-item-${index}`}>
            <Card
              className={
                'border-hc-blue border-2 bg-hc-white w-[340px] h-[190px] rounded-2xl'
              }>
              <CardContent className={'flex flex-col gap-y-1'}>
                <div className={'w-full mt-5 flex justify-between'}>
                  <Badge
                    className={'bg-hc-blue-dark text-hc-white text-[10px]'}>
                    {ddeep.type}
                  </Badge>
                  <div
                    className={
                      'h-5 w-5 rounded-full bg-hc-gray flex justify-center items-center cursor-pointer'
                    }>
                    <RotateCw
                      size={14}
                      stroke={'#848484'}
                    />
                  </div>
                </div>
                <div className={'text-[14px] font-bold text-hc-black'}>
                  {ddeep.name}
                </div>
                <div className={'flex flex-col gap-y-1'}>
                  <div className={'flex gap-x-1'}>
                    <div
                      className={'text-[12px] font-semibold text-hc-blue-dark'}>
                      이름 |
                    </div>
                    <div className={'text-[12px] font-semibold text-hc-black'}>
                      {ddeep.leader}
                    </div>
                  </div>
                  <div className={'flex gap-x-1'}>
                    <div
                      className={'text-[12px] font-semibold text-hc-blue-dark'}>
                      인원 |
                    </div>
                    <div className={'text-[12px] font-semibold text-hc-black'}>
                      {`${ddeep.participantNumber}명/${ddeep.participantLimit}명`}
                    </div>
                  </div>
                  <div className={'flex gap-x-1'}>
                    <div
                      className={'text-[12px] font-semibold text-hc-blue-dark'}>
                      설명 |
                    </div>
                    <div className={'text-[12px] font-semibold text-hc-black'}>
                      {ddeep.description}
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className={'w-full flex justify-center'}>
        <CarouselDot className={'mt-5 border-none'} />
      </div>
    </Carousel>
  );
};

export default ParticipatingCarousel;
