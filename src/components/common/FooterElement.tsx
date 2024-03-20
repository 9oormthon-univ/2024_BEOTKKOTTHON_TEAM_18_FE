import { useNavigate } from 'react-router-dom';

interface FooterElementProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const FooterElement = ({ icon, label, path }: FooterElementProps) => {
  const navigate = useNavigate();
  const handleMoveToPath = () => {
    navigate(path);
  };
  return (
    <div
      className={'flex flex-col justify-center items-center cursor-pointer'}
      onClick={handleMoveToPath}>
      <div>{icon}</div>
      <div className={'text-[10px]'}>{label}</div>
    </div>
  );
};

export default FooterElement;
