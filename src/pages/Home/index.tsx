import SectionHeader from '@/components/Home/SectionHeader.tsx';
import { interestLogoLabelInfo } from '@/constants/interestLogoLabelInfo.ts';
import InterestItem from '@/components/Home/InterestItem.tsx';
import ParticipatingCarousel from '@/components/Home/ParticipatingCarousel.tsx';
import RecruitingCarousel from '@/components/Home/RecruitingCarousel.tsx';
import { useSuspenseQuery } from '@tanstack/react-query';
import getHomeRecruitingDdeep from '@/apis/getHomeRecruitingDdeep.ts';
import getHomeParticipatingDdeep from '@/apis/getHomeParticipatingDdeep.ts';

const Home = () => {
  const { data: homeRecruitingDdeepData, error: homeRecruitingDdeepError } =
    useSuspenseQuery({
      queryKey: ['homeRecruitingDdeep'],
      queryFn: getHomeRecruitingDdeep
    });

  const {
    data: homeParticipatingDdeepData,
    error: homeParticipatingDdeepError
  } = useSuspenseQuery({
    queryKey: ['homeParticipatingDdeep'],
    queryFn: getHomeParticipatingDdeep
  });

  return (
    <>
      <section className={'w-full h-fit'}>
        <SectionHeader
          title={'모집중인 띱'}
          hasMoreDetails={true}
          showMorePath={'/ddeep/more/recruiting'}
        />
        {homeRecruitingDdeepData.result.recruitmentList.length !== 0 && (
          <RecruitingCarousel
            data={homeRecruitingDdeepData.result.recruitmentList}
          />
        )}
        {homeRecruitingDdeepError && (
          <div>모집중인 띱 정보를 불러오는 중 오류가 발생했습니다.</div>
        )}
      </section>
      <section className={'w-full max-h-[300px] bg-hc-blue-light'}>
        <SectionHeader
          title={'참여중인 띱'}
          hasMoreDetails={true}
          showMorePath={'/ddeep/more/participating'}
        />
        {homeParticipatingDdeepData.result.recruitmentList.length !== 0 ? (
          <ParticipatingCarousel
            data={homeParticipatingDdeepData.result.recruitmentList}
          />
        ) : (
          <div className={'p-4 flex justify-center'}>
            참여중인 띱이 없습니다.
          </div>
        )}
        {homeParticipatingDdeepError && (
          <div>참여중인 띱 정보를 불러오는 중 오류가 발생했습니다.</div>
        )}
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
