import FooterElement from '@/components/common/FooterElement.tsx';
import HomeIcon from '@/components/icons/HomeIcon.tsx';
import CirclePlusIcon from '@/components/icons/CirclePlusIcon.tsx';
import UserIcon from '@/components/icons/UserIcon.tsx';
import { useLocation } from 'react-router-dom';
import { footerLabelPathInfo } from '@/constants/footerLabelPathInfo.ts';
import { blueDarkHex, grayDarkHex } from '@/constants';
import NotificationIcon from '@/components/icons/NotificationIcon.tsx';
import tokenStore from '@/store/tokenStore.ts';
import LoginAlertDialog from '@/components/common/LoginAlertDialog.tsx';
import { useQuery } from '@tanstack/react-query';
import getNotificationList from '@/apis/getNotificationList.ts';
import { useEffect } from 'react';

const Footer = () => {
  const location = useLocation();
  const { token } = tokenStore();
  const { data, refetch } = useQuery({
    queryKey: ['notification'],
    queryFn: getNotificationList
  });

  useEffect(() => {
    refetch();
  }, [location.pathname, refetch]);

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
      {token ? (
        <FooterElement
          icon={
            <NotificationIcon
              fill={
                location.pathname === footerLabelPathInfo['notification'].path
                  ? blueDarkHex
                  : grayDarkHex
              }
              unread={
                data?.result.notificationList.length > 0 ? 'true' : 'false'
              }
            />
          }
          label={'알림'}
          path={'/notification'}
        />
      ) : (
        <LoginAlertDialog
          trigger={
            <FooterElement
              icon={
                <NotificationIcon
                  fill={
                    location.pathname ===
                    footerLabelPathInfo['notification'].path
                      ? blueDarkHex
                      : grayDarkHex
                  }
                  unread="true"
                />
              }
              label={'알림'}
              path={'/notification'}
              disabled={true}
            />
          }
        />
      )}
      {token ? (
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
      ) : (
        <LoginAlertDialog
          trigger={
            <FooterElement
              icon={
                <CirclePlusIcon
                  fill={
                    location.pathname ===
                    footerLabelPathInfo['ddeepCreate'].path
                      ? blueDarkHex
                      : grayDarkHex
                  }
                />
              }
              label={'띱추가'}
              path={'/ddeep/create'}
              disabled={true}
            />
          }
        />
      )}
      {token ? (
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
      ) : (
        <LoginAlertDialog
          trigger={
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
              disabled={true}
            />
          }
        />
      )}
    </footer>
  );
};

export default Footer;
