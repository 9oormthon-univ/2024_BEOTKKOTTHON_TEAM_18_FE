import { useLocation, useNavigate } from 'react-router-dom';

interface FooterElementProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const FooterElement = ({ icon, label, path }: FooterElementProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMoveToPath = () => {
    navigate(path);
  };
  return (
    <div
      className={'flex flex-col justify-center items-center cursor-pointer'}
      onClick={handleMoveToPath}>
      <div>{icon}</div>
      <div
        className={`text-[10px] ${location.pathname === path ? 'text-hc-blue-dark' : ''}`}>
        {label}
      </div>
    </div>
  );
};

export default FooterElement;
