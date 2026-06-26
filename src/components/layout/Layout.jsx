import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import JoinNowModal from '../JoinNowModal';

function Layout() {
  const [joinOpen, setJoinOpen] = useState(false);

  const openJoin = () => setJoinOpen(true);
  const closeJoin = () => setJoinOpen(false);

  return (
    <>
      <ScrollToTop />
      <Navbar onJoinClick={openJoin} />
      <main>
        <Outlet context={{ openJoin }} />
      </main>
      <Footer onJoinClick={openJoin} />
      <JoinNowModal isOpen={joinOpen} onClose={closeJoin} />
    </>
  );
}

export default Layout;
