import React from 'react';

const Promo = () => {
  return (
    <div className='flex flex-col overflow-hidden relative px-16 py-10 text-white min-h-screen max-md:px-5'>
      <div className='flex flex-col flex-grow'>
        <img
          loading='lazy'
          srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/1d93be12ca17d26906c985a4f1d78672bfd9359b9631121982696d27dbed069d?apiKey=b446d51b9534433b80edb44226844ac6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d93be12ca17d26906c985a4f1d78672bfd9359b9631121982696d27dbed069d?apiKey=b446d51b9534433b80edb44226844ac6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d93be12ca17d26906c985a4f1d78672bfd9359b9631121982696d27dbed069d?apiKey=b446d51b9534433b80edb44226844ac6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d93be12ca17d26906c985a4f1d78672bfd9359b9631121982696d27dbed069d?apiKey=b446d51b9534433b80edb44226844ac6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d93be12ca17d26906c985a4f1d78672bfd9359b9631121982696d27dbed069d?apiKey=b446d51b9534433b80edb44226844ac6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d93be12ca17d26906c985a4f1d78672bfd9359b9631121982696d27dbed069d?apiKey=b446d51b9534433b80edb44226844ac6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d93be12ca17d26906c985a4f1d78672bfd9359b9631121982696d27dbed069d?apiKey=b446d51b9534433b80edb44226844ac6&width=2000 2000w'
          className='object-cover absolute inset-0 w-full h-full'
        />
        <div className='relative self-start uppercase text-6xl lg:text-[160px]'>
          PARKETTGRUPPEN
        </div>
      </div>
      <div className='relative self-end text-6xl lg:text-8xl w-1/2'>
        Vi tenker paa parkett nesten dognet rundt.
      </div>
    </div>
  );
};

export default Promo;
