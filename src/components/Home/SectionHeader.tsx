import { useNavigate } from 'react-router-dom';

interface SectionHeaderProps {
  title: string;
  hasMoreDetails?: boolean;
  showMorePath?: string;
}

const SectionHeader = ({
  title,
  hasMoreDetails = false,
  showMorePath
}: SectionHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className={'p-4 flex justify-between items-center'}>
      <div className={'text-[18px] font-bold text-hc-black'}>{title}</div>
      {hasMoreDetails && showMorePath && (
        <div
          className={'text-[12px] text-hc-grayDark cursor-pointer'}
          onClick={() => navigate(showMorePath)}>
          {'더보기 >'}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
