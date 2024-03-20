import FooterElement from '@/components/common/FooterElement.tsx';
import HomeIcon from '@/components/icons/HomeIcon.tsx';
import MessageIcon from '@/components/icons/MessageIcon.tsx';
import CirclePlusIcon from '@/components/icons/CirclePlusIcon.tsx';
import UserIcon from '@/components/icons/UserIcon.tsx';
import { useLocation } from 'react-router-dom';
import { footerLabelPathInfo } from '@/constants/footerLabelPathInfo.ts';
import { blueDarkHex, grayDarkHex } from '@/constants';

const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className={
        'w-full h-[64px] flex justify-evenly shadow-2xl border-t border-t-hc-gray rounded-t-3xl'
      }>
      <FooterElement
        icon={
          <HomeIcon
            fill={
              location.pathname === footerLabelPathInfo['home'].path
                ? blueDarkHex
                : grayDarkHex
            }
          />
        }
        label={footerLabelPathInfo['home'].label}
        path={footerLabelPathInfo['home'].path}
      />
      <FooterElement
        icon={
          <MessageIcon
            stroke={
              location.pathname === footerLabelPathInfo['message'].path
                ? blueDarkHex
                : grayDarkHex
            }
          />
        }
        label={'메세지'}
        path={'/message'}
      />
      <FooterElement
        icon={
          <CirclePlusIcon
            fill={
              location.pathname === footerLabelPathInfo['ddeepCreate'].path
                ? blueDarkHex
                : grayDarkHex
            }
          />
        }
        label={'띱추가'}
        path={'/ddeep/create'}
      />
      <FooterElement
        icon={
          <UserIcon
            stroke={
              location.pathname === footerLabelPathInfo['myPage'].path
                ? blueDarkHex
                : grayDarkHex
            }
          />
        }
        label={'마이페이지'}
        path={'/mypage'}
      />
    </footer>
  );
};

export default Footer;
