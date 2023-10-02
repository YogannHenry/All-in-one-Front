// custom hook dédié à la gestion de redirection en cas de déconnection du user
import { useEffect } from 'react';
import { useAppSelector} from '../hooks/redux';  // Remplacez par votre propre bibliothèque de gestion d'état
import { useNavigate } from 'react-router-dom';
import _default from 'react-redux/es/components/connect';

const useAuth = () => {
  const isUserLogged = useAppSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLogged) {
      navigate('/');
    }
  }, [isUserLogged, navigate]);

  return { isUserLogged, navigate };
};

export default useAuth;