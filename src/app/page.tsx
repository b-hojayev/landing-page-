"use client";

import Ads from "@/components/Ads";
import Bussiness from "@/components/Bussiness";
import Cases from "@/components/Cases";
import ConnectForm from "@/components/ConnectForm";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import PriceModal from "@/components/PriceModal";
import Prices from "@/components/Prices";
import Quiz from "@/components/Quiz";
import SearchModal from "@/components/SearchModal";
import Suggests from "@/components/Suggests";
import { useEffect, useRef } from "react";

const Home = () => {
  const priceModalForm = useRef<HTMLFormElement>(null);
  const successModal = useRef<HTMLDivElement>(null);
  const successModalClose = useRef<HTMLImageElement>(null);
  const priceModal = useRef<HTMLDivElement>(null);
  const dekstopNav = useRef<HTMLDivElement>(null);
  const searchModal = useRef<HTMLDivElement>(null);
  const mobileMenu = useRef<HTMLDivElement>(null);
  const mobileMenuOverlay = useRef<HTMLDivElement>(null);
  const selectDropdown = useRef<HTMLDivElement>(null);
  const connectFormDropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!dekstopNav.current) {
        return;
      }

      const offset = dekstopNav.current?.offsetHeight;
      if (window.scrollY > offset + 10) {
        dekstopNav.current?.classList.add("pagecrm_desktop_nav_sticky");
      } else if (window.scrollY < offset - 40) {
        dekstopNav.current?.classList.remove("pagecrm_desktop_nav_sticky");
      }
    });
  }, []);

  return (
    <>
      <Header
        desktopNav={dekstopNav}
        searchModal={searchModal}
        mobileMenu={mobileMenu}
        mobileMenuOverlay={mobileMenuOverlay}
      />

      <SearchModal searchModal={searchModal} />

      <PriceModal
        priceModal={priceModal}
        priceModalForm={priceModalForm}
        successModal={successModal}
        successModalClose={successModalClose}
      />

      <Quiz />

      <main className="pagecrm_main bg">
        <Hero />

        <Bussiness />

        <Partners />

        <Form selectDropdown={selectDropdown} />

        <Suggests />

        <Cases />

        <Prices priceModal={priceModal} />

        <ConnectForm connectFormDropdown={connectFormDropdown} />

        <Ads />

        <Feedback />
      </main>

      <Footer />
    </>
  );
};

export default Home;
