import { logOut } from '@authenticate/logout';
import { userAuth } from '@utils/user-auth';
import { Avatar, Badge, Button } from 'antd';

export const Navbar = () => {
  const userData = userAuth.get.user();
  return (
    <nav className="w-full h-10 bg-dark-455 flex flex-row justify-evenly items-center fixed top-0 left-0">
      <div className="w-3/4 flex flex-row gap-5 items-center">
        <Badge offset={[10, 10]}>
          <Avatar shape="circle" className="h-[20px] w-[20px]" />
        </Badge>
        <h1 className="text-white text-sm">{`Seja muito bem vindo, ${userData.firstName}!`}</h1>
      </div>
      <Button className="w-[50px] h-[20px] text-sm" type="default" onClick={() => logOut()}>
        Sair
      </Button>
    </nav>
  );
};
