import React, { useRef } from "react";
import NavBarHome from "./NavBarHome";
import FAQ from "./FAQ";
import logo from "/public/logo 1.svg";
import eletricista from "/public/eletricista.jpg";
import encanador from "/public/encanador.jpg";
import diarista from "/public/diarista.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  PlugZap,
  Droplet,
  User,
  Settings,
  Paintbrush,
  KeyRound,
  LayoutDashboard,
  BrainCircuit,
  CookingPot,
  MessageCircleQuestion,
  Phone,
  Users,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TelaInicial = () => {
  const navigate = useNavigate();
  const slide = [
    { id: "1", image: eletricista },
    { id: "2", image: encanador },
    { id: "3", image: diarista },
  ];

  const faqRef = useRef(null);
  const scrollToFAQ = () => {
    if (faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEletricistaClick = () => {
    navigate("/eletricistas");
  };

  return (
    <div className="min-h-screen flex flex-col bg-sky-700">
      <NavBarHome scrollToFAQ={scrollToFAQ} />
      <div className="flex-1 ">
        <div className="md:flex md:flex-row-reverse md:p-10 mt-8 mb-8 ">
          <img
            className="mx-auto px-4 mt-5 md:w-[450px] md:[450px]"
            src={logo}
            alt="Logo"
          />
          <div className="md:flex md:flex-col md:p-4">
            <p className="p-5 text-center mt-4 text-xl text-white md:text-3xl md:text-left md:py-16 ">
              Praticidade, comodidade e segurança em um só aplicativo de
              serviços domésticos.
            </p>
            <p className="hidden md:inline-block md:ml-10 md:text-white md:italic md:-mt-10 md:text-lg">
              "Tenha tudo em um só lugar, disponível a qualquer momento, com uma
              incrível qualidade de serviço"
            </p>
          </div>
        </div>

        <div className="w-full bg-white h-auto p-2 md:p-8 md:h-auto ">
          <p className="text-center text-xl mb-4 text-sky-700 font-semibold md:text-4xl md:mb-10 mt-7 ">
            Serviços mais contratados
          </p>
          <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation className="mx-auto h-80 md:h-80 lg:h-96 mb-7">
            {slide.map((item) => (
              <SwiperSlide key={item.id} className="flex justify-center items-center h-full">
                <div className="flex justify-center items-center h-full">
                  <img
                    src={item.image}
                    alt="imagem"
                    className="w-[650px] h-auto mx-auto mb-7"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="bg-white mt-6 p-2">
        <p className="text-center font-semibold text-xl text-sky-700 md:text-4xl mt-8">
          Todos os nossos serviços
        </p>
        <div className="bg-white grid grid-cols-3 grid-rows-3 mt-8 p-3 mx-4 gap-4 md:px-20 md:py-10 mb-10">
          <div 
            className="row-span-1 rounded-lg col-span-1 flex flex-col items-center shadow-lg bg-gray-200 p-4 text-sky-700 text-lg cursor-pointer hover:bg-gray-300"
            onClick={handleEletricistaClick}
          >
            <p className="text-center">Eletricista</p>
            <PlugZap className="w-8 h-8 text-sky-600 mt-2" />
          </div>
          <div className="row-span-1 rounded-lg col-span-1 flex flex-col items-center shadow-lg bg-gray-200 p-4 text-sky-700 text-lg cursor-pointer hover:bg-gray-300">
            <p className="text-center">Encanador</p>
            <Droplet className="w-8 h-8 text-sky-600 mt-2" />
          </div>
          <div className="row-span-1 rounded-lg col-span-1 flex flex-col items-center shadow-lg bg-gray-200 p-4 text-sky-700 text-lg cursor-pointer hover:bg-gray-300">
            <p className="text-center">Diarista</p>
            <User className="w-8 h-8 text-sky-600 mt-2" />
          </div>
          <div className="row-span-1 rounded-lg col-span-1 flex flex-col items-center shadow-lg bg-gray-200 p-4 text-sky-700 text-lg cursor-pointer hover:bg-gray-300">
            <p className="text-center">Assistência técnica</p>
            <Settings className="w-8 h-8 text-sky-600 mt-2" />
          </div>
          <div className="row-span-1 rounded-lg col-span-1 flex flex-col items-center shadow-lg bg-gray-200 p-4 text-sky-700 text-lg cursor-pointer hover:bg-gray-300">
            <p className="text-center">Pintor</p>
            <Paintbrush className="w-8 h-8 text-sky-600 mt-2" />
          </div>
          <div className="row-span-1 rounded-lg col-span-1 flex flex-col items-center shadow-lg bg-gray-200 p-4 text-sky-700 text-lg cursor-pointer hover:bg-gray-300">
            <p className="text-center">Chaveiro</p>
            <KeyRound className="w-8 h-8 text-sky-600 mt-2" />
          </div>
          <div className="row-span-1 rounded-lg col-span-1 flex flex-col items-center shadow-lg bg-gray-200 p-4 text-sky-700 text-lg cursor-pointer hover:bg-gray-300">
            <p className="text-center">Empreiteiro</p>
            <LayoutDashboard className="w-8 h-8 text-sky-600 mt-2" />
          </div>
          <div className="row-span-1 rounded-lg col-span-1 flex flex-col items-center shadow-lg bg-gray-200 p-4 text-sky-700 text-lg cursor-pointer hover:bg-gray-300">
            <p className="text-center">Arquiteto</p>
            <BrainCircuit className="w-8 h-8 text-sky-600 mt-2" />
          </div>
          <div className="row-span-1 rounded-lg col-span-1 flex flex-col items-center shadow-lg bg-gray-200 p-4 text-sky-700 text-lg cursor-pointer hover:bg-gray-300">
            <p className="text-center">Cozinheiro</p>
            <CookingPot className="w-8 h-8 text-sky-600 mt-2" />
          </div>
        </div>
      </div>
      <div className="mt-6 p-3 mx-4 mb-6 flex flex-col items-center bg-white rounded-lg md:flex-row md:justify-around md:h-80 ">
        <div className="flex flex-col gap-3 p-5 justify-center items-center">
          <MessageCircleQuestion size={60} className="text-sky-700 " />
          <p className="font-bold text-xl text-sky-700">Quem somos?</p>
          <p className="text-center p-4 font-semibold md:text-lg">
            Somos uma plataforma, onde você pode contratar serviços domésticos
            de forma rápida, fácil e segura.
          </p>
        </div>

        <div className="flex flex-col gap-3 p-5 justify-center items-center">
          <Users className="text-sky-700" size={60} />
          <h5 className="text-xl font-bold text-sky-700">Faça seu chamado</h5>
          <p className="text-center p-4 font-semibold md:text-lg">
            Chame um profissional qualificado a qualquer momento
          </p>
        </div>
        <div className="flex flex-col gap-3 p-5 justify-center items-center">
          <Award className="text-sky-700 " size={60} />
          <h5 className="text-xl font-bold text-sky-700">Segurança</h5>
          <p className="text-center p-4 font-semibold md:text-lg">
            Um profissional qualificado irá atendê-lo
          </p>
        </div>
        <div className="flex flex-col gap-3 p-5 justify-center items-center">
          <Phone className="text-sky-700" size={60} />
          <h5 className="text-xl font-bold text-sky-700">Praticidade</h5>
          <p className="text-center p-4 font-semibold md:text-lg">
            Você poderá chamar um profissional de qualquer dispositivo conectado
            a internet
          </p>
        </div>
      </div>
      <div ref={faqRef}>
        <FAQ />
      </div>
    </div>
  );
};

export default TelaInicial;
