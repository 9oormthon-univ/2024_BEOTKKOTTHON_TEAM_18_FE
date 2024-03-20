import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar.tsx';

interface InterestItemProps {
  imgSrc: string;
  label: string;
}

const InterestItem = ({ imgSrc, label }: InterestItemProps) => {
  return (
    <div className={'flex flex-col justify-center items-center cursor-pointer'}>
      <Avatar>
        <AvatarImage src={imgSrc} />
        <AvatarFallback>{`${label} 로고`}</AvatarFallback>
      </Avatar>
      <div className={'text-[12px] text-hc-black mt-2'}>{label}</div>
    </div>
  );
};

export default InterestItem;
