import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AdminIndexPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/admin/login');
  }, [router]);

  return <div />;
};

export default AdminIndexPage;
