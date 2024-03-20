import FooterElement from '@/components/common/FooterElement.tsx';
import HomeIcon from '@/components/icons/HomeIcon.tsx';
import MessageIcon from '@/components/icons/MessageIcon.tsx';
import CirclePlusIcon from '@/components/icons/CirclePlusIcon.tsx';
import UserIcon from '@/components/icons/UserIcon.tsx';

const Footer = () => {
  return (
    <footer className={'w-full h-[64px] flex justify-evenly'}>
      <FooterElement
        icon={<HomeIcon />}
        label={'홈'}
        path={'/'}
      />
      <FooterElement
        icon={<MessageIcon />}
        label={'메세지'}
        path={'/message'}
      />
      <FooterElement
        icon={<CirclePlusIcon />}
        label={'띱추가'}
        path={'/ddeep/create'}
      />
      <FooterElement
        icon={<UserIcon />}
        label={'마이페이지'}
        path={'/mypage'}
      />
    </footer>
  );
};

export default Footer;
