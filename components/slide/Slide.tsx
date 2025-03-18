import React from "react";
import Image from "next/image";

export const Slide = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white dark:bg-black">
        <div className="flex flex-col gap-4 items-center justify-center pt-6 pb-10 md:px-6 px-4">
          <Image
            className="w-full h-[60vh] rounded"
            src="/presentacion.png"
            alt="Top Image"
            width={1920}
            height={1080}
          />

          <div className="w-full flex gap-2 items-center justify-between">
            <div className="ld:w-1/3 flex flex-col">
              <h2 className="text-4xl  font-semibold dark:text-white">
                Bienvenidos al Grupo Famet
              </h2>
              <p className="mt-2 dark:text-gray-400">
                En Grupo Famet nos especializamos en la venta de materiales de
                construcción de alta calidad, ofreciendo fierros, ladrillos,
                cementos y mucho más para tus proyectos. Comprometidos con la
                excelencia y el mejor servicio, somos tu aliado en cada obra.
              </p>
              <button className="w-fit px-4 py-2 rounded mt-4 font-semibold bg-green-600 text-white">
                Mayor información
              </button>
            </div>

            <Image
              className="lg:block hidden w-[16rem] h-[18rem] border-[12px] border-gray-300 dark:border-gray-950"
              src="/presentacion2.jpg"
              alt="image"
              width={1920}
              height={1080}
            />
            {/* <img
              className="xl:block hidden w-[16rem] h-[18rem] border-[12px] border-gray-300 dark:border-gray-950"
              src="/presentacion.png"
              alt="image"
            /> */}
            <Image
              className="sm:block hidden w-[16rem] h-[18rem] border-[12px] border-gray-300 dark:border-gray-950"
              src="/presentacion1.jpg"
              alt="image"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </>
  );
};
