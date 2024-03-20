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
      <section className={'w-full h-1/3'}>
        <SectionHeader title={'관심 분야'} />
      </section>
    </div>
  );
};

export default Home;
