import SectionHeader from '@/components/Home/SectionHeader.tsx';

const Home = () => {
  return (
    <div className={'h-full'}>
      <section className={'w-full h-1/3'}>
        <SectionHeader
          title={'모집중인 띱'}
          hasMoreDetails={true}
        />
      </section>
      <section className={'w-full h-1/3'}>
        <SectionHeader
          title={'참여중인 띱'}
          hasMoreDetails={true}
        />
      </section>
      <section className={'w-full h-fit'}>
        <SectionHeader title={'관심분야'} />
        <div className={'grid grid-cols-4 gap-y-2'}>
          {interestLogoLabelInfo.map((interest, index) => (
            <InterestItem
              key={`interest-${index}`}
              imgSrc={interest.logoPath}
              label={interest.label}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
