import Link from 'next/link';
import { useRouter } from 'next/router';
import { SidebarContainer, NavItem, Label } from './StyledSidebar';
import { MdDashboard } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';
import { TbReportSearch } from 'react-icons/tb';

interface NavItemProps {
  href: string;
  Icon: React.ElementType;
  label: string;
}

const navItems: NavItemProps[] = [
  { href: '/dashboard', Icon: MdDashboard, label: 'Dashboard' },
  { href: '/student', Icon: PiStudent, label: 'Students' },
  { href: '/attendance', Icon: TbReportSearch, label: 'Attendance' },
];

const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <SidebarContainer>
      {navItems.map(({ href, Icon, label }) => (
        <Link key={href} href={href} passHref>
          <NavItem $isActive={router.pathname === href}>
            <Icon
              style={{
                color: router.pathname === href ? 'color' : 'inherit',
              }}
            />
            <Label>{label}</Label>
          </NavItem>
        </Link>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
