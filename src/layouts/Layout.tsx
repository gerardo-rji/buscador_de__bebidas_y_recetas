import { Outlet } from 'react-router-dom';
import Header from "../components/Header.tsx";
import Modal from "../components/Modal.tsx";

export default function Layout() {
  return (
    <>
      <Header />

      <main className="container mx-auto py-16 max-w-5xl">
        <Outlet />
      </main>

      <Modal />
    </>
  );
}