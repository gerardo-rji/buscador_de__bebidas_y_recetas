import { Outlet } from 'react-router-dom';
import Header from "../components/Header.tsx";

export default function Layout() {
  return (
    <>
      <Header />

      <main className="container mx-auto py-16 max-w-5xl">
        <Outlet />
      </main>
    </>
  );
}