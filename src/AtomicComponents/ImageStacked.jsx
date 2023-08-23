import Image from "next/image";

const ImageStacked = ({ images }) => {
  return (
    <>
      <div className="relative flexmm z-[-1]">
        <div className="absolute flexmm w-[1.5em] z-[100] left-0">
          <Image
            src={`${images[0]}.svg`}
            width={100}
            height={100}
            alt={`${images[0]}`}
          />
        </div>
        <div className="absolute flexmm w-[1.5em] z-[75] left-[0.8em]">
          <Image
            src={`${images[1]}.svg`}
            width={100}
            height={100}
            alt={`${images[1]}`}
          />
        </div>
        <div className="absolute flexmm w-[1.5em] z-[50] left-[1.6em]">
          <Image
            src={`${images[2]}.svg`}
            width={100}
            height={100}
            alt={`${images[2]}`}
          />
        </div>
        <div className="absolute flexmm w-[1.5em] z-[25] left-[2.4em]">
          <Image
            src={`${images[3]}.svg`}
            width={100}
            height={100}
            alt={`${images[3]}`}
          />
        </div>
      </div>
    </>
  );
};

export default ImageStacked;


// const { createServer } = require('http');
// const { parse } = require('url');
// const { createReadStream } = require('fs');
// const { join } = require('path');

// const next = require('next');
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const port = process.env.PORT || 3000;

// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true);
//     const { pathname } = parsedUrl;

//     // Set caching headers for SVG files
//     if (pathname.endsWith('.svg')) {
//       res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 1 day (86400 seconds)
//     }

//     handle(req, res, parsedUrl);
//   }).listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });
