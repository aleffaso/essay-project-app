import { logOut } from '@authenticate/logout';
import { Button } from 'antd';

export const Navbar = () => {
  return (
    <nav className="w-full h-10 bg-dark-455 flex flex-center fixed top-0 left-0">
      <ul>
        <li>Início</li>
        <li>
          <Button onClick={() => logOut()}>Sair</Button>
        </li>
      </ul>
    </nav>
  );
};
