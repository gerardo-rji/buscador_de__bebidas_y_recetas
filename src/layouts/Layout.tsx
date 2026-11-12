import { useEffect } from "react";
import { Outlet } from 'react-router-dom';
import Header from "../components/Header.tsx";
import Modal from "../components/Modal.tsx";
import { useAppStore } from "../stores/useAppStore.ts";
import Notification from "../components/Notification.tsx";

export default function Layout() {
  const loadFromStorage = useAppStore(state => state.loadFromStorage)

  useEffect(() => {
    loadFromStorage()
  }, [])

  return (
    <>
      <Header />

      <main className="container mx-auto py-16 max-w-5xl">
        <Outlet />
      </main>

      <Modal />

      <Notification />
    </>
  );
}