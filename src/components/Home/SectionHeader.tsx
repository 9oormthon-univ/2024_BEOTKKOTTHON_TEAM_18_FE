interface SectionHeaderProps {
  title: string;
  hasMoreDetails?: boolean;
}

const SectionHeader = ({
  title,
  hasMoreDetails = false
}: SectionHeaderProps) => {
  return (
    <div className={'p-4 flex justify-between items-center'}>
      <div className={'text-[18px] font-bold text-hc-black'}>{title}</div>
      {hasMoreDetails && (
        <div className={'text-[12px] text-hc-grayDark cursor-pointer'}>
          {'더보기 >'}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
