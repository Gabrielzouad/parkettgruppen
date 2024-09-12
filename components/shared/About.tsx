import React from 'react';
import Divider from './Divider';
import { selskaper } from '@/lib/constants';
import Image from 'next/image';

const About = () => {
  return (
    <div
      className='flex flex-col p-6 mt-32 mx-auto max-w-screen-2xl'
      id='about'
    >
      <Divider Character='A' />
      <div className='flex gap-5 justify-between ml-16 max-w-full text-lg text-neutral-900 '>
        <div>OM OSS</div>
      </div>
      <div className='self-center mt-20 w-full '>
        <div className='grid gap-10 md:grid-cols-4'>
          <div className='flex flex-col sm:col-span-2 '>
            <div className='text-4xl leading-[52px] text-neutral-900 max-md:mt-10 max-md:max-w-full uppercase'>
              Vi tilbyr et variert utvalg av parkettgulv og tilbehør, samt
              utendørs terrassebord i ulike treslag.
            </div>
          </div>
          <div className='flex flex-col sm:col-span-1 '>
            <div className='text-xl leading-8 text-neutral-900 max-md:mt-10'>
              Vi tilbyr et bredt utvalg av parkettgulv fra ledende produsenter
              som Tarkett, Boen og Gunreben. Utforsk vårt mangfoldige sortiment
              av parkettgulv som passer enhver smak og stil, inkludert et
              variert utvalg av typer og treslag. Vår kolleksjon inkluderer også
              unike motiver, kompassroser og spesialkomponenter som vil gi ditt
              gulv et særegent preg.
              <br />
              Ikke bare leverer vi parkettgulv av høy kvalitet, men vi tilbyr
              også alt nødvendig tilbehør, inkludert listverk og underlag, for å
              sikre en komplett installasjon.
            </div>
          </div>
          <div className='flex flex-col sm:col-span-1 '>
            <div className='text-xl leading-8 text-neutral-900 max-md:mt-10'>
              I tillegg til innendørs parkettgulv, tilbyr vi også et omfattende
              utvalg av utendørs terrassebord i ulike treslag, tykkelser og
              bredder. Skap en elegant og funksjonell utendørs plass med våre
              holdbare og estetisk tiltalende terrasseprodukter.
              <br />
              <br />
              Utforsk våre produkter og tjenester i dag, og la oss hjelpe deg
              med å realisere ditt drømmegulv!
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-10 mt-28 sm:grid sm:grid-cols-4'>
        <img
          loading='lazy'
          srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/a3cceea6c5557456fd5cbd78d875400c815b80f7749c44c9aa9e20a92fe09d4b?apiKey=b446d51b9534433b80edb44226844ac6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3cceea6c5557456fd5cbd78d875400c815b80f7749c44c9aa9e20a92fe09d4b?apiKey=b446d51b9534433b80edb44226844ac6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3cceea6c5557456fd5cbd78d875400c815b80f7749c44c9aa9e20a92fe09d4b?apiKey=b446d51b9534433b80edb44226844ac6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3cceea6c5557456fd5cbd78d875400c815b80f7749c44c9aa9e20a92fe09d4b?apiKey=b446d51b9534433b80edb44226844ac6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3cceea6c5557456fd5cbd78d875400c815b80f7749c44c9aa9e20a92fe09d4b?apiKey=b446d51b9534433b80edb44226844ac6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3cceea6c5557456fd5cbd78d875400c815b80f7749c44c9aa9e20a92fe09d4b?apiKey=b446d51b9534433b80edb44226844ac6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3cceea6c5557456fd5cbd78d875400c815b80f7749c44c9aa9e20a92fe09d4b?apiKey=b446d51b9534433b80edb44226844ac6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3cceea6c5557456fd5cbd78d875400c815b80f7749c44c9aa9e20a92fe09d4b?apiKey=b446d51b9534433b80edb44226844ac6&'
          className='col-span-2 '
        />

        <img
          loading='lazy'
          srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/91dca128ca0fecf0f5ab87cba7ad0e8cdfba193903c1a5f18d091259ae9c0fcc?apiKey=b446d51b9534433b80edb44226844ac6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91dca128ca0fecf0f5ab87cba7ad0e8cdfba193903c1a5f18d091259ae9c0fcc?apiKey=b446d51b9534433b80edb44226844ac6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91dca128ca0fecf0f5ab87cba7ad0e8cdfba193903c1a5f18d091259ae9c0fcc?apiKey=b446d51b9534433b80edb44226844ac6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91dca128ca0fecf0f5ab87cba7ad0e8cdfba193903c1a5f18d091259ae9c0fcc?apiKey=b446d51b9534433b80edb44226844ac6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91dca128ca0fecf0f5ab87cba7ad0e8cdfba193903c1a5f18d091259ae9c0fcc?apiKey=b446d51b9534433b80edb44226844ac6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91dca128ca0fecf0f5ab87cba7ad0e8cdfba193903c1a5f18d091259ae9c0fcc?apiKey=b446d51b9534433b80edb44226844ac6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91dca128ca0fecf0f5ab87cba7ad0e8cdfba193903c1a5f18d091259ae9c0fcc?apiKey=b446d51b9534433b80edb44226844ac6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91dca128ca0fecf0f5ab87cba7ad0e8cdfba193903c1a5f18d091259ae9c0fcc?apiKey=b446d51b9534433b80edb44226844ac6&'
          className='shrink-0 self-end max-w-full aspect-[0.6] w-[405px] 
           col-span-1 col-end-5'
        />
      </div>
      <div className='md:grid md:grid-cols-4 gap-10 mt-28 text-neutral-900  '>
        <h1 className='flex text-[250px] mt-[-80px] col-start-2 col-span-1 text-orange-700'>
          19
        </h1>
        <div className='text-4xl leading-[50px] col-span-1 uppercase'>
          år med parkett, listverk og planlegging
        </div>
        <div className='flex-auto self-stretch text-xl leading-6 max-md:pt-10'>
          For oss er parkett en lidenskap. Vi tenker på parkett nesten døgnet
          rundt. Etter hvert er det også flere og flere som tenker på oss for vi
          har siden oppstarten i 2005 allerede blitt en av Norges ledende i
          levering og montering av parkett. Vi er stolte over det!Vår virksomhet
          er basert på å kunne levere og montere alle typer tregulv med tilbehør
          til prosjekter over hele Skandinavia.
        </div>
      </div>
      <h2 className='flex justify-center my-8 text-3xl leading-8 pt-20'>
        Våre Partnere
      </h2>
      <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-5'>
        {selskaper.map(({ id, img, name, link }) => (
          <a
            key={id}
            target='_blank'
            href={link}
            className='flex flex-col flex-wrap justify-center items-center md:max-w-60 max-w-32 gap-2 hover:cursor-pointer'
          >
            <Image
              src={img}
              alt={name}
              height='160'
              width='160'
              className='h-16 w-16 md:h-32 md:w-32 object-contain'
            />
            <p className='text-sm'>{name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default About;
