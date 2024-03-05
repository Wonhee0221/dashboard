'use client'; // 서버에서 하는지 클라이언트에서 하는지 알려주기 위함


import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  Bars2Icon
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation'; // 현재의 경로를 알아내기 위한것..
import clsx from 'clsx'; // 이걸이용해서 현재 선택된 메뉴임을 조건을 줘서 티를 내려고 사용
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: '대쉬보드 홈', href: '/dashboard', icon: HomeIcon },
  { name: '송장', href: '/dashboard/invoices',  icon: DocumentDuplicateIcon,},
  { name: '고객', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: '홈', href: '/', icon: Bars2Icon },
];

export default function NavLinks() {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-green-100 text-green-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
