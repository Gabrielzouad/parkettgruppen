import React from 'react';
import Divider from './Divider';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='w-full bg-slate-50' id='kontakt'>
      <div className='flex flex-col px-16 mt-32  mx-auto max-w-screen-2xl '>
        <div className='md:grid grid-cols-2 mt-12 gap-8 '>
          <h2 className='text-5xl md:text-7xl'>
            TRENGER DU GULV TIL PROSJEKTET? TA KONTAKT! VI BITER IKKE.
          </h2>
          <div className='flex gap-2 text-2xl max-md:my-6 '>
            <a className='hover:underline'>FACEBOOK</a>
            <a className='hover:underline'>INSTAGRAM</a>
            <a className='hover:underline'>LINKEDIN</a>
          </div>
        </div>
        <div className='grid md:grid-cols-4 overflow-hidden'>
          <div className='md:col-start-3'>
            <div
              className={`shrink-0 max-w-full border border-solid black bg-black mb-6 border-black w-screen`}
            />
            <h3 className='text-2xl'>KONTAKT OSS</h3>
            <p className='text-lg'>POST@PARKETTGRUPPEN.NO</p>
            <p className='text-lg'>Mandag - Fredag: 08:00 - 16:00</p>
          </div>
          <div>
            <div
              className={`shrink-0 max-w-full border border-solid black bg-black mb-6 border-black w-screen`}
            />
            <h3 className='text-2xl'>HAUGESUND</h3>
            <p className='text-lg'>Vestheimvegen 23, 4250 Kopervik</p>
            <p className='text-lg'>4000 65 86</p>
          </div>
        </div>
        <div className='flex flex-col items-center my-12'>
          <a className='text-slate-600 text-lg underline' href='/åpenhetsloven'>
            Åpenhetsloven
          </a>
          <p className=''>© {year} PARKETTGRUPPEN</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
