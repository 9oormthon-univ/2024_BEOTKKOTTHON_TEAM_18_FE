import SectionHeader from '@/components/Home/SectionHeader.tsx';
import { interestLogoLabelInfo } from '@/constants/interestLogoLabelInfo.ts';
import InterestItem from '@/components/Home/InterestItem.tsx';
import ParticipatingCarousel from '@/components/Home/ParticipatingCarousel.tsx';
import RecruitingCarousel from '@/components/Home/RecruitingCarousel.tsx';

const Home = () => {
  return (
    <>
      <section className={'w-full h-fit'}>
        <SectionHeader
          title={'모집중인 띱'}
          hasMoreDetails={true}
          showMorePath={'/ddeep/more/recruiting'}
        />
        <RecruitingCarousel />
      </section>
      <section className={'w-full h-[300px] bg-hc-blue-light'}>
        <SectionHeader
          title={'참여중인 띱'}
          hasMoreDetails={true}
          showMorePath={'/ddeep/more/participating'}
        />
        <ParticipatingCarousel />
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
