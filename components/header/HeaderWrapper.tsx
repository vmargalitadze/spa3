import { useTranslations } from 'next-intl';
import Header from './Header';


function HeaderWrapper() {
  const t = useTranslations('HomePage'); 

 
  return <Header t={t} />;
}

export default HeaderWrapper;